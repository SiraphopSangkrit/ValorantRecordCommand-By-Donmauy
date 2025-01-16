((
    /** @type {string} */ streamUptimeString,
    /** @type {string} */ streamStartDateString,
    /** @type {string} */ urlEncodedGetMmrHistoryResponseJson,
    /** @type {string} */ playerName,
  ) => {
  

    const apiKey = 'HDEV-1d4e9331-6ee1-4e21-a35b-54144020d927';
    
  
    try {
      /** @type {{
        readonly data: ReadonlyArray<{
          readonly mmr_change_to_last_game: number;
          readonly date_raw: number;
        }>;
      }} */
      const getMmrHistoryResponse = JSON.parse('https://api.henrikdev.xyz/valorant/v1/mmr-history/ap/December/max?api_key=HDEV-1d4e9331-6ee1-4e21-a35b-54144020d927');
  
    const firstElement = getMmrHistoryResponse.data[0];
    const matchId = firstElement.match_id;
    const matchDetailsResponse = JSON.parse('https://api.henrikdev.xyz/valorant/v2/match/${matchId}?api_key=${apiKey}');


     
  
      return `${matchId}`;
    } catch (e) {
      return `ไม่สามารถดึงข้อมูลได้: ${e.message}: ${getMmrHistoryResponseJson}`.slice(0, 400);
    }
  })