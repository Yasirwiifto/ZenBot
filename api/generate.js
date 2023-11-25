// Backups for the max duration and dynamic parameters defined in vercel.json
export const maxDuration = 300;
export const dynamic = 'force-dynamic';

export default async (req, res) => {

    const { content } = req.body;

    try {
        // calling the OpenAI API endpoint
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content }],
                temperature: 1.2,
            }),
        });

        const data = await response.json();
        const formattedContent = data.choices[0].message.content.replace(/\n/g, "<br>");
        res.status(200).json({ message: formattedContent });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Error occurred while generating." });
    }
};
