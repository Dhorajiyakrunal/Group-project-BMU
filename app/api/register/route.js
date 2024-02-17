export async function POST(req, res) {

    const { email, password } = JSON.stringify(req.body);

    console.log(`email : `, email);
    console.log(`password : `, password);

    return Response.json({ email, password, mesage: "Success...." })
}