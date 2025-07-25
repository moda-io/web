exports.handler = async function(event, context) {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }
  
    const { email } = JSON.parse(event.body || "{}");
    if (!email) {
      return { statusCode: 400, body: "Email is required" };
    }
  
    // TODO: Store the email somewhere (e.g., Google Sheets, email, database)
    // For now, just log it
    console.log("New waitlist signup:", email);
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Signup received!" }),
    };
  };