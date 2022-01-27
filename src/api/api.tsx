const BASE_URL = 'https://api.coinpaprika.com/v1'

export async function fetchCoinsList() {
    return fetch(`${BASE_URL}/coins`).then(response => response.json())
}

export async function fetchCoinInfo(coinId: string) {
    return fetch(`${BASE_URL}/coins/${coinId}`).then(response => response.json())
}

export async function fetchTikerInfo(coinId: string) {
    return fetch(`${BASE_URL}/tickers/${coinId}`).then(response => response.json())
}

export async function fetchCoinHistory(coinId: string, weekCount: number) {
    const endDate = Math.floor(Date.now() / 1000)
    const startDate = endDate - 60 * 60 * 24 * 7 * weekCount
    return fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`).then(response => response.json())
}