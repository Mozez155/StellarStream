// lib/bulk-splitter/types.ts

// Issue #689 - Added tokenAddress for USD value calculation
export interface Voter {
  address: string;
  governance_score: bigint;
  /** Optional internal Tax ID / note — stored backend-only, never on-chain. */
  taxId?: string;
}

export interface Recipient {
  address: string;
  amount: bigint;
  /** Token address for price lookup (e.g., 'native' for XLM, 'CA7AR... for USDC) */
  tokenAddress?: string;
  /** Optional internal Tax ID / note — stored backend-only, never on-chain. */
  taxId?: string;
}
