const { Client } = require("pg");
const db = require("../../utils/db");

module.exports.createFeedback = async function (request) {
    try {
        // console.log(request.body);
        // console.log(db.credentials);
        const client = new Client(db.credentials);
        await client.connect();
        // await client.query('SET schema "feedbackManagement"');

        const insertSql = `
            INSERT INTO "feedbackManagement".feedback (
            user_id, experience_rating, payment_process_rating, 
            customer_service_rating, feedback_comment)
            VALUES ( $1, $2, $3, $4, $5);
        `;
        const values = [
            request.body.userId, request.body.experienceRating, request.body.paymentProcessRating,
            request.body.customerServiceRating, request.body.feedbackComment
        ];
        const result = await client.query(insertSql, values);
        if (result.rowCount === 1) {
            return {
                "status": 201,
                "success": true,
                "message": "Feedback saved successfully"
            }
        }
    } catch (error) {
        if (error.detail.indexOf('already exists') > -1) {
            return {
                "status": 200,
                "success": false,
                "message": "You have already submitted feedback!"
            }
        } else {
            return {
                "status": 500,
                "success": false,
                "message": error.detail
            }
        }
    }
}