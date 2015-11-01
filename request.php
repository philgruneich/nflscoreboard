<?php

$ch = curl_init('http://www.nfl.com/liveupdate/scorestrip/scorestrip.json');
  $result = curl_exec($ch);
  if(curl_errno($ch))
    {
        return 'Curl error: ' . curl_error($ch);
    }
    curl_close ($ch);
    return $result;

?>