<?php

$r = file_get_contents("http://www.nfl.com/liveupdate/scorestrip/scorestrip.json");

file_put_contents("/app/scoreboard.json", $r);

?>