export interface CoinMarketCap{

    // "id": "bitcoin", 
    // "name": "Bitcoin", 
    // "symbol": "BTC", 
    // "rank": "1", 
    // "price_usd": "3621.65879767", 
    // "price_btc": "1.0", 
    // "24h_volume_usd": "6337622429.56", 
    // "market_cap_usd": "63516742535.0", 
    // "available_supply": "17538025.0", 
    // "total_supply": "17538025.0", 
    // "max_supply": "21000000.0", 
    // "percent_change_1h": "0.03", 
    // "percent_change_24h": "-0.16", 
    // "percent_change_7d": "6.25", 
    // "last_updated": "1550163384"

    // id: string;
    // name: string;
    // symbol: string;
    // rank: string;
    // price_usd: string;
    // price_btc: string;
    // h_volume_usd: string;
    // market_cap_usd: string;
    // available_supply: string;
    // total_supply: string;
    // max_supply: string;
    // percent_change_1h: string;
    // percent_change_24h: string;
    // percent_change_7d: string;
    // last_updated: string;

        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string; 
        site_admin: boolean;

}