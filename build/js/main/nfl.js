(function() {

  function returnNumeral(n) {
    if (n === "1") {
      return "1st";
    } else if (n === "2") {
      return "2nd";
    } else if (n === "3") {
      return "3rd";
    } else {
      return n + "th";
    }
  }

  function fixJax(n) {
    if (n.toLowerCase() === 'jac') {
      return 'JAX';
    } else {
      return n;
    }
  }

  function makeRequest(interval) {

    var container = document.querySelector('.container');

    var req = new XMLHttpRequest();

    req.onreadystatechange = function() {
      if (req.readyState == 4 && req.status == 200) {

        container.innerHTML = "";

        window.clearInterval(interval);

        var obj, length, htmlLength, i, rows, ongoingGame;

        rows = [];
        obj = JSON.parse(req.responseText.replace(/,(?=,)/gm, ",\"\"")).ss;
        length = obj.length;

        for (i=0; i < length; i++) {
          var row = {};
          row.weekday     = obj[i][0];
          row.hour        = obj[i][1];
          row.status      = obj[i][2];
          row.side        = obj[i][3];
          row.home_team   = obj[i][4];
          row.home_score  = obj[i][5];
          row.visit_team  = obj[i][6];
          row.visit_score = obj[i][7];

          if (obj[i][2] === "Final" || obj[i][2] === "final overtime") {
            // Game is over
            row.info = 'Final';
            row.class_name = 'done';
          } else if (obj[i][2] === "Halftime") {
            // Game is in halftime
            row.info = 'Half';
            row.class_name = 'half';
          } else if (obj[i][2] === "Pregame") {
            // Game is yet to start
            row.info = obj[i][0] + '<br />' + obj[i][1].slice(0, -3);
            row.class_name = 'upcoming';
          } else {
            // Game is ongoing
            ongoingGame = true;
            row.info = returnNumeral(obj[i][2]) + '<br />' + obj[i][3];
            row.class_name = 'ongoing';
          }

          rows.push(row);
        }

        htmlLength = rows.length;

        for (i=0; i < htmlLength; i++) {
          var div = document.createElement('div')
          div.classList.add('row');
          div.classList.add(rows[i].class_name);
          var content = "<div class='info'>" + rows[i].info + "</div>";
          content += "<div class='name'>" + fixJax(rows[i].home_team) + "</div>";
          content += "<div class='logo' data-team='" + fixJax(rows[i].home_team) + "'><div class='team-logo'></div></div>";
          content += "<div class='score'>" + rows[i].home_score + "</div>";
          content += "<div class='bar'></div>";
          content += "<div class='score'>" + rows[i].visit_score + "</div>";
          content += "<div class='logo' data-team='" + fixJax(rows[i].visit_team) + "'><div class='team-logo'></div></div>";
          content += "<div class='name'>" + fixJax(rows[i].visit_team) + "</div>";
          //console.log(content);
          div.innerHTML = content;
          //console.log(div);
          container.appendChild(div);
        }

        return setRefreshTimer(ongoingGame);
      }
    }

    req.open("GET", '/request.php', true);
    req.send();
  }

  function setRefreshTimer(ongoing) {
    var timer = (ongoing ? 60000 : 1800000);

    return setInterval(makeRequest, timer);
  }

  function init() {
    // Change page background to black if the URL contains "?desktop", for debugging while developing on your computer
    if (document.location.href.indexOf('desktop') > -1)
    {
      document.querySelector('.container').style.backgroundColor = '#000';
    }

    var date = new Date();
    var weekday = date.getDay();
    var timer, interval;

    interval = setRefreshTimer((weekday === 0 || weekday === 1 || weekday === 4));

    return makeRequest(interval);
  }

  init();

})();