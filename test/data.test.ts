import { ChainId, WETH, Token, Fetcher } from '../src'

// TODO: replace the provider in these tests
describe.skip('data', () => {
  it('Token', async () => {
    const token = await Fetcher.fetchTokenData(ChainId.MAINNET, '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f') // WHT
    expect(token.decimals).toEqual(18)
  })

  it('Token:MDX', async () => {
    const token = await Fetcher.fetchTokenData(ChainId.MAINNET, '0x25d2e80cb6b86881fd7e07dd263fb79f4abe033c') // MDX
    expect(token.decimals).toEqual(18)
  })

  it('Pair', async () => {
    const token = new Token(ChainId.MAINNET, '0xa71edc38d189767582c38a3145b5873052c3e47a', 18) // Heco-Peg USDTHECO Token
    const pair = await Fetcher.fetchPairData(WETH[ChainId.MAINNET], token)
    expect(pair.liquidityToken.address).toEqual('0x499b6e03749b4baf95f9e70eed5355b138ea6c31')
  })
})
