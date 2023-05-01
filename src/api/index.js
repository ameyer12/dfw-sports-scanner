export const getCowboysRecordData = async () => {
    try {
        const response = await fetch("https://v1.american-football.api-sports.io/standings?league=1&season=2022&team=29", 
        {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v1.american-football.api-sports.io",
                "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY
            }
        });

        const results = response.json();

        return results;

    } catch (error) {
        throw error;
    }
}

export const getCowboysScheduleData = async () => {
    try {
        const response = await fetch("https://v1.american-football.api-sports.io/games?team=29&season=2022", 
        {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v1.american-football.api-sports.io",
                "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY
            }
        });

        const results = response.json();

        return results;

    } catch (error) {
        throw error;
    }
}
