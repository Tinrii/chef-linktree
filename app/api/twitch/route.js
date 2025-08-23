import { NextResponse } from 'next/server';

export async function GET() {
    const clientId = process.env.TWITCH_CLIENT_ID;
    const clientSecret = process.env.TWITCH_CLIENT_SECRET;
    const streamerName = 'leblackkkk';

    try {
        const tokenRes = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`, { 
            method: "POST" 
        });

        const tokenData = await tokenRes.json();
        const accessToken = tokenData.access_token;

        const res = await fetch(`https://api.twitch.tv/helix/streams?user_login=${streamerName}`, {
            headers: {
                "Client-ID": clientId,
                "Authorization": `Bearer ${accessToken}`,
            },
        });

        const data = await res.json();

        const isLive = data.data && data.data.length > 0;

        return NextResponse.json({ live: isLive });
    } catch (error) {
        return NextResponse.json({ live: false, error: error.message }, { status: 500 });
    }
}