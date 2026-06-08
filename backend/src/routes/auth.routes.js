await client.post(
 "/api/session",
 {
   email: process.env.TRACCAR_USER,
   password: process.env.TRACCAR_PASSWORD
 }
);