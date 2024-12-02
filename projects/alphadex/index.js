const { post } = require('../helper/http')

async function tvl(api) {
  const summary = await post('https://api.alphadex.net/v0/alphadex/market_info')
  return {
    'radix': summary.xrdValueOfLiquidity
  }
}

module.exports = {
  timetravel: false,
  radixdlt: { tvl }
}