import "@styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const RootLayout = ({ children }) => {
    return (
        <html lang="rs" className="scroll-smooth">
            <head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png"/>
                <link rel="icon" type="image/png" sizes="192x192" href="images/favicon/android-chrome-192x192.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="images/favicon/android-chrome-512x512.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/x-icon" href="/images/favicon/favicon.ico" />
                <link rel="manifest" href="/images/favicon/site.webmanifest"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="project name"/>
                <meta name="twitter:description" content="description"/>
                <meta name="twitter:image" content="/images/favicon/favicon-32x32.png"/>
                <meta name="twitter:creator" content="@tin_rii"/>

                <link rel="stylesheet" href="https://utils.zerotenacity.com/fa7/css/all.css" />
            </head>
            <body className="bg-white text-black">
                <main className="app">
                    {children}
                    <Analytics /> {/* Vercel analytics */}
                    <SpeedInsights /> {/* Vercel speed insights */}
                </main>
            </body>
        </html>
    );
};

export default RootLayout;