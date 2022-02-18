import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>

                    {/* Custom fonts for this template*/}

                </Head>
                <body>
                    <Main />
                    <NextScript />



                    <script data-cfasync="false" src="./cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script src="js/jquery.js"></script>
                    {/* <script type="text/javascript" src="js/ie8.js"></script> */}
                    <script src="js/plugins.js"></script>
                    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA5bpEs3xlB8vhxNFErwoo3MXR64uavf6Y&callback=initMap"></script>
                    <script src="js/init.js"></script>

                </body>
            </Html>
        )
    }
}

export default MyDocument;