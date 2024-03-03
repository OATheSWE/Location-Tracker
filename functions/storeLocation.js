// storeLocation.js
const fs = require('fs');

exports.handler = async function(event, context) {
    try {
        const { latitude, longitude } = JSON.parse(event.body);

        // Create or append to location.txt file
        fs.appendFileSync('location.txt', `Latitude: ${latitude}, Longitude: ${longitude}\n`);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Location data received and stored successfully." })
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "An error occurred while processing location data." })
        };
    }
};
