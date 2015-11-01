(function() {

  function returnNumeral(n) {
    if (n === "1") {
      return "1st";
    } else if (n === "2") {
      return "2nd";
    } else if (n === "3") {
      return "3rd";
    } else if (n === "4") {
      return "4th";
    } else {
      return n;
    }
  }

  function makeRequest() {

    var container = document.querySelector('.container');

    container.innerHTML = "";

    var req = new XMLHttpRequest();

    req.onreadystatechange = function() {
      if (req.readyState == 4 && req.status == 200) {
        var obj, length, htmlLength, i, rows;

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

          if (obj[i][2] === "Final") {
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
          content += "<div class='name'>" + rows[i].home_team + "</div>";
          content += "<div class='logo' data-team='" + rows[i].home_team + "'><div class='team-logo'></div></div>";
          content += "<div class='score'>" + rows[i].home_score + "</div>";
          content += "<div class='bar'></div>";
          content += "<div class='score'>" + rows[i].visit_score + "</div>";
          content += "<div class='logo' data-team='" + rows[i].visit_team + "'><div class='team-logo'></div></div>";
          content += "<div class='name'>" + rows[i].visit_team + "</div>";
          //console.log(content);
          div.innerHTML = content;
          //console.log(div);
          container.appendChild(div);
        }

      }
    }

    req.open("GET", 'http://www.nfl.com/liveupdate/scorestrip/scorestrip.json', true);
    req.send();

  }

  function init() {
    // Change page background to black if the URL contains "?desktop", for debugging while developing on your computer
    if (document.location.href.indexOf('desktop') > -1)
    {
      document.querySelector('.container').style.backgroundColor = '#000';
    }
    
    makeRequest();

    var date = new Date();
    var weekday = date.getDay();
    var timer;

    if(weekday === 0 || weekday === 1 || weekday === 4) {
      timer = 60000;
    } else {
      timer = 1800000;
    }
    // console.log(timer);

    var int=self.setInterval(function(){makeRequest()},timer);
  }

  init();

})();