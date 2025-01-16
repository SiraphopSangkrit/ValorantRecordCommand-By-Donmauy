
    const apiKey = 'HDEV-1d4e9331-6ee1-4e21-a35b-54144020d927';
    
    /**
     * Fetches the last Valorant match details
     * @returns {Promise<Object>} Match details or error message
     */
    async function getLastMatch() {
        try {
            // Get MMR History
            const mmrHistoryUrl = `https://api.henrikdev.xyz/valorant/v1/mmr-history/ap/December/max?api_key=${apiKey}`;
            const mmrResponse = await fetch(mmrHistoryUrl);
            
            if (!mmrResponse.ok) {
                throw new Error(`MMR History API error: ${mmrResponse.status}`);
            }
            
            const getMmrHistoryResponse = await mmrResponse.json();
            
            if (!getMmrHistoryResponse.data?.[0]) {
                throw new Error('No match history found');
            }

            // Get match ID from first entry
            const firstElement = getMmrHistoryResponse.data[0];
            const matchId = firstElement.match_id;

            // Get match details
            const matchUrl = `https://api.henrikdev.xyz/valorant/v2/match/${matchId}?api_key=${apiKey}`;
            const matchResponse = await fetch(matchUrl);
            
            if (!matchResponse.ok) {
                throw new Error(`Match details API error: ${matchResponse.status}`);
            }
            
            const matchDetailsResponse = await matchResponse.json();
            return matchDetailsResponse;

        } catch (e) {
            return `ไม่สามารถดึงข้อมูลได้: ${e.message}`.slice(0, 400);
        }
    }

    return getLastMatch();