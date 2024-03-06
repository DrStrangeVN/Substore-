function operator(proxies) {
    const xgameHost = "media3.xgaming.vn"; // SNI cho server xgame
    const localHost = "local.com"; // SNI cho server Local

    proxies.forEach(p => {
        // Đổi SNI cho server xgame
        if (p.server.includes('xgaming')) {
            if ((p.type === 'vmess' || p.type === 'trojan') && p.network === 'ws') {
                p["ws-opts"] = p["ws-opts"] || {};
                p["ws-opts"]["headers"] = p["ws-opts"]["headers"] || {};
                p["ws-opts"]["headers"]["Host"] = xgameHost;
            }
            p.sni = xgameHost;
        }
        // Đổi SNI cho server Local
        if (p.server.includes('Local')) {
            p.sni = localHost;
        }
    });

    return proxies;
}
