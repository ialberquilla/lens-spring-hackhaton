export const chainTablesSchemas = {
    addresses: {
        name: "addresses",
        description: "This table stores information about all addresses on the network, including smart contracts.",
        mainnet_query: "SELECT * FROM `lens-chain-mainnet.public.addresses` LIMIT 1;",
        testnet_query: "SELECT * FROM `lens-chain-testnet.public.addresses` LIMIT 1;",
        columns: [
            { name: "createdAt", type: "timestamp", description: "Timestamp when this record was created" },
            { name: "updatedAt", type: "timestamp", description: "Timestamp when this record was last updated" },
            { name: "address", type: "bytea", description: "The blockchain address (in bytes format)" },
            { name: "bytecode", type: "bytea", description: "Contract bytecode for smart contract addresses" },
            { name: "createdInBlockNumber", type: "bigint", description: "Block number when this address was created" },
            { name: "creatorTxHash", type: "bytea", description: "Transaction hash that created this address" },
            { name: "creatorAddress", type: "bytea", description: "Address that created this address (contract deployer)" },
            { name: "createdInLogIndex", type: "integer", description: "Log index within the block where this address was created" },
            { name: "isEvmLike", type: "boolean", description: "Whether the address follows EVM address format" },
        ]
    },
    blocks: {
        name: "blocks",
        description: "This table contains information about each block in the blockchain.",
        mainnet_query: "SELECT * FROM `lens-chain-mainnet.public.blocks` LIMIT 1;",
        testnet_query: "SELECT * FROM `lens-chain-testnet.public.blocks` LIMIT 1;",
        columns: [
            { name: "createdAt", type: "timestamp", description: "Timestamp when this record was created" },
            { name: "updatedAt", type: "timestamp", description: "Timestamp when this record was last updated" },
            { name: "number", type: "bigint", description: "Block number" },
            { name: "nonce", type: "varchar", description: "Block nonce value" },
            { name: "difficulty", type: "integer", description: "Mining difficulty at this block" },
            { name: "gasLimit", type: "varchar(128)", description: "Maximum gas allowed in this block" },
            { name: "gasUsed", type: "varchar(128)", description: "Total gas used by all transactions in this block" },
            { name: "baseFeePerGas", type: "varchar(128)", description: "Base fee per gas unit in this block" },
            { name: "l1BatchNumber", type: "bigint", description: "Layer 1 batch number that includes this block" },
            { name: "l1TxCount", type: "integer", description: "Number of L1 transactions in this block" },
            { name: "l2TxCount", type: "integer", description: "Number of L2 transactions in this block" },
            { name: "hash", type: "bytea", description: "Block hash" },
            { name: "parentHash", type: "bytea", description: "Hash of the parent block" },
            { name: "miner", type: "bytea", description: "Address of the miner/validator who produced this block" },
            { name: "extraData", type: "bytea", description: "Additional data included in the block" },
            { name: "timestamp", type: "timestamp", description: "Timestamp when the block was mined" },
        ]
    },
    transactions: {
        name: "transactions",
        description: "This table stores all transactions processed on the network.",
        mainnet_query: "SELECT * FROM `lens-chain-mainnet.public.transactions` LIMIT 1;",
        testnet_query: "SELECT * FROM `lens-chain-testnet.public.transactions` LIMIT 1;",
        columns: [
            { name: "createdAt", type: "timestamp", description: "Timestamp when this record was created" },
            { name: "updatedAt", type: "timestamp", description: "Timestamp when this record was last updated" },
            { name: "number", type: "bigint", description: "Unique transaction identifier" },
            { name: "nonce", type: "bigint", description: "Transaction nonce (unique per sender address)" },
            { name: "transactionIndex", type: "integer", description: "Index position of transaction in the block" },
            { name: "gasLimit", type: "varchar(128)", description: "Maximum gas allowed for this transaction" },
            { name: "gasPrice", type: "varchar(128)", description: "Gas price in wei" },
            { name: "maxFeePerGas", type: "varchar(128)", description: "Maximum fee per gas (EIP-1559)" },
            { name: "maxPriorityFeePerGas", type: "varchar(128)", description: "Maximum priority fee per gas (EIP-1559)" },
            { name: "value", type: "varchar(128)", description: "Amount of cryptocurrency transferred" },
            { name: "chainId", type: "integer", description: "Chain identifier" },
            { name: "blockNumber", type: "bigint", description: "Block number where this transaction was included" },
            { name: "type", type: "integer", description: "Transaction type" },
            { name: "accessList", type: "jsonb", description: "Access list for EIP-2930 transactions" },
            { name: "l1BatchNumber", type: "bigint", description: "Layer 1 batch number that includes this transaction" },
            { name: "fee", type: "varchar", description: "Transaction fee" },
            { name: "isL1Originated", type: "boolean", description: "Whether the transaction originated from Layer 1" },
            { name: "receivedAt", type: "timestamp", description: "Timestamp when the transaction was received by the network" },
            { name: "hash", type: "bytea", description: "Transaction hash" },
            { name: "to", type: "bytea", description: "Recipient address" },
            { name: "from", type: "bytea", description: "Sender address" },
            { name: "data", type: "bytea", description: "Transaction data/input" },
            { name: "blockHash", type: "bytea", description: "Hash of the block containing this transaction" },
            { name: "receiptStatus", type: "integer", description: "Transaction receipt status (1 = success, 0 = failure)" },
            { name: "gasPerPubdata", type: "varchar", description: "Gas per public data" },
            { name: "error", type: "varchar", description: "Error message if the transaction failed" },
            { name: "revertReason", type: "varchar", description: "Reason for transaction reversion if applicable" },
        ]
    },
    transactionReceipts: {
        name: "transactionReceipts",
        description: "This table contains the receipts generated after transaction execution.",
        mainnet_query: "SELECT * FROM `lens-chain-mainnet.public.transactionReceipts` LIMIT 1;",
        testnet_query: "SELECT * FROM `lens-chain-testnet.public.transactionReceipts` LIMIT 1;",
        columns: [
            { name: "createdAt", type: "timestamp", description: "Timestamp when this record was created" },
            { name: "updatedAt", type: "timestamp", description: "Timestamp when this record was last updated" },
            { name: "number", type: "bigint", description: "Unique receipt identifier" },
            { name: "transactionIndex", type: "integer", description: "Index position of transaction in the block" },
            { name: "type", type: "integer", description: "Receipt type" },
            { name: "gasUsed", type: "varchar(128)", description: "Amount of gas used by this transaction" },
            { name: "effectiveGasPrice", type: "varchar(128)", description: "Effective gas price for this transaction" },
            { name: "blockNumber", type: "bigint", description: "Block number containing this transaction" },
            { name: "cumulativeGasUsed", type: "varchar(128)", description: "Cumulative gas used up to this transaction in the block" },
            { name: "byzantium", type: "boolean", description: "Whether the receipt uses Byzantium format" },
            { name: "status", type: "integer", description: "Transaction status code" },
            { name: "transactionHash", type: "bytea", description: "Hash of the transaction" },
            { name: "to", type: "bytea", description: "Recipient address" },
            { name: "from", type: "bytea", description: "Sender address" },
            { name: "contractAddress", type: "bytea", description: "Address of newly created contract, if applicable" },
            { name: "root", type: "bytea", description: "State root (pre-Byzantium)" },
            { name: "logsBloom", type: "bytea", description: "Bloom filter for indexed event logs" },
            { name: "blockHash", type: "bytea", description: "Hash of the block containing this transaction" },
        ]
    },
    logs: {
        name: "logs",
        description: "This table stores event logs emitted during transaction execution.",
        mainnet_query: "SELECT * FROM `lens-chain-mainnet.public.logs` LIMIT 1;",
        testnet_query: "SELECT * FROM `lens-chain-testnet.public.logs` LIMIT 1;",
        columns: [
            { name: "createdAt", type: "timestamp", description: "Timestamp when this record was created" },
            { name: "updatedAt", type: "timestamp", description: "Timestamp when this record was last updated" },
            { name: "number", type: "bigint", description: "Unique log identifier" },
            { name: "blockNumber", type: "bigint", description: "Block number containing this log" },
            { name: "transactionIndex", type: "integer", description: "Index position of transaction in the block" },
            { name: "removed", type: "boolean", description: "Whether the log was removed due to chain reorganization" },
            { name: "logIndex", type: "integer", description: "Index position of log in the transaction" },
            { name: "transactionHash", type: "bytea", description: "Hash of the transaction that generated this log" },
            { name: "address", type: "bytea", description: "Address that generated this log" },
            { name: "data", type: "bytea", description: "Non-indexed log parameters" },
            { name: "topics", type: "ARRAY", description: "Indexed log topics" },
            { name: "timestamp", type: "timestamp", description: "Timestamp of the block containing this log" },
        ]
    },
    transfers: {
        name: "transfers",
        description: "This table records all asset transfers that occur on the network.",
        mainnet_query: "SELECT * FROM `lens-chain-mainnet.public.transfers` LIMIT 1;",
        testnet_query: "SELECT * FROM `lens-chain-testnet.public.transfers` LIMIT 1;",
        columns: [
            { name: "createdAt", type: "timestamp", description: "Timestamp when this record was created" },
            { name: "updatedAt", type: "timestamp", description: "Timestamp when this record was last updated" },
            { name: "number", type: "bigint", description: "Unique transfer identifier" },
            { name: "blockNumber", type: "bigint", description: "Block number containing this transfer" },
            { name: "amount", type: "varchar(128)", description: "Amount transferred" },
            { name: "type", type: "USER-DEFINED", description: "Transfer type" },
            { name: "fields", type: "jsonb", description: "Additional fields specific to this transfer" },
            { name: "from", type: "bytea", description: "Sender address" },
            { name: "to", type: "bytea", description: "Recipient address" },
            { name: "transactionHash", type: "bytea", description: "Hash of the transaction that caused this transfer" },
            { name: "tokenAddress", type: "bytea", description: "Address of the token being transferred" },
            { name: "logIndex", type: "integer", description: "Index position of the log that recorded this transfer" },
            { name: "transactionIndex", type: "integer", description: "Index position of transaction in the block" },
            { name: "timestamp", type: "timestamp", description: "Timestamp of the block containing this transfer" },
            { name: "isFeeOrRefund", type: "boolean", description: "Whether this transfer is a fee payment or refund" },
            { name: "isInternal", type: "boolean", description: "Whether this is an internal transfer" },
            { name: "tokenType", type: "USER-DEFINED", description: "Type of token being transferred" },
        ]
    },
    addressTransfers: {
        name: "addressTransfers",
        description: "This table maps addresses to their transfers for efficient querying.",
        mainnet_query: "SELECT * FROM `lens-chain-mainnet.public.addressTransfers` LIMIT 1;",
        testnet_query: "SELECT * FROM `lens-chain-testnet.public.addressTransfers` LIMIT 1;",
        columns: [
            { name: "createdAt", type: "timestamp", description: "Timestamp when this record was created" },
            { name: "updatedAt", type: "timestamp", description: "Timestamp when this record was last updated" },
            { name: "number", type: "bigint", description: "Unique record identifier" },
            { name: "transferNumber", type: "bigint", description: "Reference to the transfer.number" },
            { name: "address", type: "bytea", description: "The address involved in the transfer" },
            { name: "blockNumber", type: "bigint", description: "Block number containing this transfer" },
            { name: "timestamp", type: "timestamp", description: "Timestamp of the block containing this transfer" },
            { name: "isFeeOrRefund", type: "boolean", description: "Whether this transfer is a fee payment or refund" },
            { name: "logIndex", type: "integer", description: "Index position of the log that recorded this transfer" },
            { name: "tokenAddress", type: "bytea", description: "Address of the token being transferred" },
            { name: "fields", type: "jsonb", description: "Additional fields specific to this transfer" },
            { name: "isInternal", type: "boolean", description: "Whether this is an internal transfer" },
            { name: "tokenType", type: "USER-DEFINED", description: "Type of token being transferred" },
            { name: "type", type: "USER-DEFINED", description: "Transfer type" },
        ]
    },
    addressTransactions: {
        name: "addressTransactions",
        description: "This table maps addresses to transactions for efficient querying.",
        mainnet_query: "SELECT * FROM `lens-chain-mainnet.public.addressTransactions` LIMIT 1;",
        testnet_query: "SELECT * FROM `lens-chain-testnet.public.addressTransactions` LIMIT 1;",
        columns: [
            { name: "createdAt", type: "timestamp", description: "Timestamp when this record was created" },
            { name: "updatedAt", type: "timestamp", description: "Timestamp when this record was last updated" },
            { name: "number", type: "bigint", description: "Unique record identifier" },
            { name: "transactionHash", type: "bytea", description: "Transaction hash" },
            { name: "address", type: "bytea", description: "Address involved in the transaction" },
            { name: "blockNumber", type: "bigint", description: "Block number containing this transaction" },
            { name: "receivedAt", type: "timestamp", description: "Timestamp when the transaction was received" },
            { name: "transactionIndex", type: "integer", description: "Index position of transaction in the block" },
        ]
    },
    tokens: {
        name: "tokens",
        description: "This table stores information about tokens on the network.",
        mainnet_query: "SELECT * FROM `lens-chain-mainnet.public.tokens` LIMIT 1;",
        testnet_query: "SELECT * FROM `lens-chain-testnet.public.tokens` LIMIT 1;",
        columns: [
            { name: "createdAt", type: "timestamp", description: "Timestamp when this record was created" },
            { name: "updatedAt", type: "timestamp", description: "Timestamp when this record was last updated" },
            { name: "number", type: "bigint", description: "Unique token identifier" },
            { name: "symbol", type: "varchar", description: "Token symbol" },
            { name: "name", type: "varchar", description: "Token name" },
            { name: "decimals", type: "integer", description: "Number of decimal places" },
            { name: "blockNumber", type: "bigint", description: "Block number when this token was created" },
            { name: "l2Address", type: "bytea", description: "Layer 2 address of this token" },
            { name: "l1Address", type: "bytea", description: "Layer 1 address of this token" },
            { name: "transactionHash", type: "bytea", description: "Hash of the transaction that created this token" },
            { name: "logIndex", type: "integer", description: "Index position of the log that recorded this token creation" },
            { name: "usdPrice", type: "double precision", description: "Current USD price" },
            { name: "liquidity", type: "double precision", description: "Token liquidity" },
            { name: "iconURL", type: "varchar", description: "URL to token icon" },
            { name: "offChainDataUpdatedAt", type: "timestamp", description: "Timestamp when off-chain data was last updated" },
        ]
    },
    balances: {
        name: "balances",
        description: "This table tracks token balances for addresses.",
        mainnet_query: "SELECT * FROM `lens-chain-mainnet.public.balances` LIMIT 1;",
        testnet_query: "SELECT * FROM `lens-chain-testnet.public.balances` LIMIT 1;",
        columns: [
            { name: "createdAt", type: "timestamp", description: "Timestamp when this record was created" },
            { name: "updatedAt", type: "timestamp", description: "Timestamp when this record was last updated" },
            { name: "address", type: "bytea", description: "Owner address" },
            { name: "tokenAddress", type: "bytea", description: "Token address" },
            { name: "blockNumber", type: "bigint", description: "Block number at which this balance was recorded" },
            { name: "balance", type: "varchar(128)", description: "Token balance amount" },
        ]
    },
    batches: {
        name: "batches",
        description: "This table stores information about Layer 2 batch processing for rollups.",
        mainnet_query: "SELECT * FROM `lens-chain-mainnet.public.batches` LIMIT 1;",
        testnet_query: "SELECT * FROM `lens-chain-testnet.public.batches` LIMIT 1;",
        columns: [
            { name: "createdAt", type: "timestamp", description: "Timestamp when this record was created" },
            { name: "updatedAt", type: "timestamp", description: "Timestamp when this record was last updated" },
            { name: "number", type: "bigint", description: "Batch number" },
            { name: "rootHash", type: "bytea", description: "Root hash of the batch" },
            { name: "l1GasPrice", type: "varchar(128)", description: "Layer 1 gas price at the time of this batch" },
            { name: "l2FairGasPrice", type: "varchar(128)", description: "Layer 2 fair gas price for this batch" },
            { name: "commitTxHash", type: "bytea", description: "Hash of the transaction that committed this batch" },
            { name: "committedAt", type: "timestamp", description: "Timestamp when this batch was committed" },
            { name: "proveTxHash", type: "bytea", description: "Hash of the transaction that proved this batch" },
            { name: "provenAt", type: "timestamp", description: "Timestamp when this batch was proven" },
            { name: "executeTxHash", type: "bytea", description: "Hash of the transaction that executed this batch" },
            { name: "executedAt", type: "timestamp", description: "Timestamp when this batch was executed" },
            { name: "l1TxCount", type: "integer", description: "Number of Layer 1 transactions in this batch" },
            { name: "l2TxCount", type: "integer", description: "Number of Layer 2 transactions in this batch" },
            { name: "timestamp", type: "timestamp", description: "Timestamp of the batch" },
        ]
    }
}



export const protocolTablesSchemas = {
    "account.acted": {
      "name": "account.acted",
      "description": "Records actions performed by accounts on posts. Previous was publication.open_action_module_acted_record in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.account.acted` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.account.acted` LIMIT 1;",
      "columns": [
        { "name": "id", "type": "integer", "description": "Unique identifier" },
        { "name": "account", "type": "bytea", "description": "Account address that performed the action" },
        { "name": "post", "type": "bytea", "description": "Post identifier" },
        { "name": "action_id", "type": "integer", "description": "Action identifier" },
        { "name": "implementation", "type": "bytea", "description": "Implementation address" },
        { "name": "action_data", "type": "text", "description": "Action data" },
        { "name": "is_collect", "type": "boolean", "description": "Whether action is a collect" },
        { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
        { "name": "block_hash", "type": "bytea", "description": "Hash of the block containing this record" },
        { "name": "timestamp", "type": "timestamp with time zone", "description": "Action time" },
        { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "account.action_config": {
      "name": "account.action_config",
      "description": "Stores action configurations for accounts.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.account.action_config` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.account.action_config` LIMIT 1;",
      "columns": [
        { "name": "id", "type": "integer", "description": "Unique identifier" },
        { "name": "action_address", "type": "bytea", "description": "Action address" },
        { "name": "type", "type": "USER-DEFINED", "description": "Action type" },
        { "name": "account", "type": "bytea", "description": "Account address" },
        { "name": "raw_config_params", "type": "jsonb", "description": "Raw configuration parameters" },
        { "name": "decoded_config_params", "type": "jsonb", "description": "Decoded configuration parameters" },
        { "name": "disabled", "type": "boolean", "description": "Whether action is disabled" },
        { "name": "timestamp", "type": "timestamp with time zone", "description": "Configuration time" },
        { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" },
        { "name": "disable_extra_data", "type": "bytea", "description": "Disable extra data" },
        { "name": "enable_extra_data", "type": "bytea", "description": "Enable extra data" },
        { "name": "last_updated_sequence_id", "type": "numeric", "description": "Last update sequence ID" },
        { "name": "return_data", "type": "bytea", "description": "Return data" },
        { "name": "app", "type": "bytea", "description": "App identifier" }
      ]
    },
    "account.action_executed": {
      "name": "account.action_executed",
      "description": "Logs executed actions by accounts.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.account.action_executed` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.account.action_executed` LIMIT 1;",
      "columns": [
        { "name": "id", "type": "integer", "description": "Unique identifier" },
        { "name": "action_address", "type": "bytea", "description": "Action address" },
        { "name": "type", "type": "USER-DEFINED", "description": "Action type" },
        { "name": "on_account", "type": "bytea", "description": "Account the action was performed on" },
        { "name": "raw_params", "type": "jsonb", "description": "Raw parameters" },
        { "name": "decoded_params", "type": "jsonb", "description": "Decoded parameters" },
        { "name": "timestamp", "type": "timestamp with time zone", "description": "Execution time" },
        { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" },
        { "name": "app", "type": "bytea", "description": "App identifier" },
        { "name": "by_account", "type": "bytea", "description": "Account that executed the action" }
      ]
    },
    "account.action_executed_by_account_count": {
      "name": "account.action_executed_by_account_count",
      "description": "Counts actions executed by specific accounts.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.account.action_executed_by_account_count` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.account.action_executed_by_account_count` LIMIT 1;",
      "columns": [
        { "name": "action_address", "type": "bytea", "description": "Action address" },
        { "name": "by_account", "type": "bytea", "description": "Account that executed the action" },
        { "name": "total", "type": "integer", "description": "Total count of executions" }
      ]
    },
    "account.action_executed_count": {
      "name": "account.action_executed_count",
      "description": "Counts actions executed on specific accounts.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.account.action_executed_count` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.account.action_executed_count` LIMIT 1;",
      "columns": [
        { "name": "action_address", "type": "bytea", "description": "Action address" },
        { "name": "account", "type": "bytea", "description": "Account address" },
        { "name": "total", "type": "integer", "description": "Total count of executions" }
      ]
    },
    "account.action_metadata": {
      "name": "account.action_metadata",
      "description": "Stores metadata for account actions.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.account.action_metadata` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.account.action_metadata` LIMIT 1;",
      "columns": [
        { "name": "action", "type": "bytea", "description": "Action address" },
        { "name": "metadata_uri", "type": "character varying", "description": "URI for the metadata" },
        { "name": "metadata_snapshot_location_url", "type": "character varying", "description": "URL for metadata snapshot" },
        { "name": "metadata", "type": "jsonb", "description": "Stored metadata" },
        { "name": "name", "type": "character varying", "description": "Action name" },
        { "name": "description", "type": "character varying", "description": "Action description" },
        { "name": "metadata_version", "type": "character", "description": "Metadata version" },
        { "name": "created_on", "type": "timestamp with time zone", "description": "Creation time" }
      ]
    },
    "account.blocked": {
      "name": "account.blocked",
      "description": "Records blocked accounts. Previous was profile.blocked in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.account.blocked` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.account.blocked` LIMIT 1;",
      "columns": [
        { "name": "account", "type": "bytea", "description": "Blocked account address" },
        { "name": "blocking_account", "type": "bytea", "description": "Account doing the blocking" },
        { "name": "block_hash", "type": "bytea", "description": "Hash of the block containing this record" },
        { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
        { "name": "timestamp", "type": "timestamp with time zone", "description": "Block time" },
        { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "account.bookmarked_post": {
      "name": "account.bookmarked_post",
      "description": "Stores posts bookmarked by accounts. Previous was personalisation.bookmarked_publication in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.account.bookmarked_post` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.account.bookmarked_post` LIMIT 1;",
      "columns": [
        { "name": "account", "type": "bytea", "description": "Account address" },
        { "name": "post", "type": "bytea", "description": "Bookmarked post identifier" },
        { "name": "created_at", "type": "timestamp with time zone", "description": "Bookmark time" }
      ]
    },
    "account.follow_rule_config": {
      "name": "account.follow_rule_config",
      "description": "Configurations for follow rules.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.account.follow_rule_config` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.account.follow_rule_config` LIMIT 1;",
      "columns": [
        { "name": "id", "type": "integer", "description": "Unique identifier" },
        { "name": "rule_address", "type": "bytea", "description": "Rule address" },
        { "name": "config_salt", "type": "bytea", "description": "Configuration salt" },
        { "name": "type", "type": "USER-DEFINED", "description": "Rule type" },
        { "name": "graph", "type": "bytea", "description": "Graph identifier" },
        { "name": "account", "type": "bytea", "description": "Account address" },
        { "name": "raw_config_params", "type": "jsonb", "description": "Raw configuration parameters" },
        { "name": "decoded_config_params", "type": "jsonb", "description": "Decoded configuration parameters" },
        { "name": "timestamp", "type": "timestamp with time zone", "description": "Configuration time" },
        { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" },
        { "name": "last_updated_sequence_id", "type": "numeric", "description": "Last update sequence ID" }
      ]
    },
    "account.follow_rule_selector": {
      "name": "account.follow_rule_selector",
      "description": "Selectors for follow rules.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.account.follow_rule_selector` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.account.follow_rule_selector` LIMIT 1;",
      "columns": [
        { "name": "id", "type": "integer", "description": "Unique identifier" },
        { "name": "config_salt", "type": "bytea", "description": "Configuration salt" },
        { "name": "selector", "type": "USER-DEFINED", "description": "Rule selector" },
        { "name": "is_required", "type": "boolean", "description": "Whether the rule is required" },
        { "name": "timestamp", "type": "timestamp with time zone", "description": "Configuration time" },
        { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" },
        { "name": "graph", "type": "bytea", "description": "Graph identifier" },
        { "name": "account", "type": "bytea", "description": "Account address" },
        { "name": "rule_address", "type": "bytea", "description": "Rule address" }
      ]
    },
    "account.follower": {
      "name": "account.follower",
      "description": "Records follower relationships. Previous was profile.follower in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.account.follower` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.account.follower` LIMIT 1;",
      "columns": [
        { "name": "id", "type": "integer", "description": "Unique identifier" },
        { "name": "account_following", "type": "bytea", "description": "Account being followed" },
        { "name": "account_follower", "type": "bytea", "description": "Account doing the following" },
        { "name": "graph", "type": "bytea", "description": "Graph identifier" },
        { "name": "follow_id", "type": "character varying", "description": "Follow identifier" },
        { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
        { "name": "block_hash", "type": "bytea", "description": "Hash of the block containing this record" },
        { "name": "timestamp", "type": "timestamp with time zone", "description": "Follow time" },
        { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "account.follower_summary": {
      "name": "account.follower_summary",
      "description": "Summarizes follower statistics. Previous was global_stats.profile_follower in Lens V2. Corresponding clustered table account.follower_summary_clustered_by_account is available for better performance on account column.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.account.follower_summary` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.account.follower_summary` LIMIT 1;",
      "columns": [
        { "name": "account", "type": "bytea", "description": "Account address" },
        { "name": "total_followers", "type": "integer", "description": "Total number of followers" },
        { "name": "total_following", "type": "integer", "description": "Total number of accounts followed" },
        { "name": "graph", "type": "bytea", "description": "Graph identifier" },
        { "name": "updated_at", "type": "timestamp with time zone", "description": "Last update time" }
      ]
    },
    "account.known_smart_wallet": {
      "name": "account.known_smart_wallet",
      "description": "Records known smart wallets.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.account.known_smart_wallet` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.account.known_smart_wallet` LIMIT 1;",
      "columns": [
        { "name": "address", "type": "bytea", "description": "Wallet address" },
        { "name": "owned_by", "type": "bytea", "description": "Owner address" },
        { "name": "legacy_profile_id", "type": "character varying", "description": "Legacy profile ID" },
        { "name": "block_hash", "type": "bytea", "description": "Hash of the block containing this record" },
        { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
        { "name": "timestamp", "type": "timestamp with time zone", "description": "Record time" },
        { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" },
        { "name": "last_updated_sequence_id", "type": "numeric", "description": "Last update sequence ID" }
      ]
    },
    "account.manager": {
      "name": "account.manager",
      "description": "Records account managers. Previous was profile.manager in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.account.manager` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.account.manager` LIMIT 1;",
      "columns": [
        { "name": "id", "type": "integer", "description": "Unique identifier" },
        { "name": "account", "type": "bytea", "description": "Account address" },
        { "name": "manager", "type": "bytea", "description": "Manager address" },
        { "name": "is_hidden", "type": "boolean", "description": "Whether manager is hidden" },
        { "name": "can_execute_transactions", "type": "boolean", "description": "Transaction execution permission" },
        { "name": "can_transfer_tokens", "type": "boolean", "description": "Token transfer permission" },
        { "name": "can_transfer_native", "type": "boolean", "description": "Native transfer permission" },
        { "name": "can_set_metadata_uri", "type": "boolean", "description": "Metadata URI setting permission" },
        { "name": "block_hash", "type": "bytea", "description": "Hash of the block containing this record" },
        { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
        { "name": "timestamp", "type": "timestamp with time zone", "description": "Record time" },
        { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" },
        { "name": "last_updated_sequence_id", "type": "numeric", "description": "Last update sequence ID" }
      ]
    },
    "account.metadata": {
      "name": "account.metadata",
      "description": "Stores account metadata. Previous was profile.metadata in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.account.metadata` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.account.metadata` LIMIT 1;",
      "columns": [
        { "name": "account", "type": "bytea", "description": "Account address" },
        { "name": "metadata_uri", "type": "character varying", "description": "URI for the metadata" },
        { "name": "metadata_snapshot_location_url", "type": "character varying", "description": "URL for metadata snapshot" },
        { "name": "metadata", "type": "jsonb", "description": "Stored metadata" },
        { "name": "name", "type": "character varying", "description": "Account name" },
        { "name": "metadata_version", "type": "character", "description": "Metadata version" },
        { "name": "created_on", "type": "timestamp with time zone", "description": "Creation time" },
        { "name": "app", "type": "bytea", "description": "App identifier" }
      ]
    },
    "account.notification": {
      "name": "account.notification",
      "description": "Stores account notifications. Previous was notification.record in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.account.notification` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.account.notification` LIMIT 1;",
      "columns": [
        { "name": "notification_id", "type": "integer", "description": "Unique identifier" },
        { "name": "generated_notification_id", "type": "character varying", "description": "Generated notification ID" },
        { "name": "type", "type": "character varying", "description": "Notification type" },
        { "name": "post", "type": "bytea", "description": "Post identifier" },
        { "name": "post_pointer", "type": "bytea", "description": "Post pointer" },
        { "name": "receiving_account", "type": "bytea", "description": "Account receiving the notification" },
        { "name": "sender_account", "type": "bytea", "description": "Account sending the notification" },
        { "name": "action_date", "type": "timestamp with time zone", "description": "Action date" },
        { "name": "reaction", "type": "USER-DEFINED", "description": "Reaction type" },
        { "name": "open_action_acted", "type": "bytea", "description": "Open action identifier" },
        { "name": "is_collect", "type": "boolean", "description": "Whether action is a collect" },
        { "name": "app", "type": "bytea", "description": "App identifier" },
        { "name": "graph", "type": "bytea", "description": "Graph identifier" },
        { "name": "feed", "type": "bytea", "description": "Feed identifier" }
      ]
    },
    "account.peer_to_peer_recommendation": {
      "name": "account.peer_to_peer_recommendation",
      "description": "Records peer-to-peer account recommendations. Previous was profile.peer_to_peer_recommendation in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.account.peer_to_peer_recommendation` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.account.peer_to_peer_recommendation` LIMIT 1;",
      "columns": [
        { "name": "account", "type": "bytea", "description": "Account address" },
        { "name": "account_recommendation", "type": "bytea", "description": "Recommended account address" },
        { "name": "created_at", "type": "timestamp with time zone", "description": "Recommendation time" }
      ]
    },
    "account.post_summary": {
      "name": "account.post_summary",
      "description": "Summarizes post statistics for accounts. Previous was global_stats.profile in Lens V2. Corresponding clustered table account.post_summary_clustered_by_account is available for better performance on account column. Repost/Mirros are not migrated from Lens V2. Total_reposts may not represent the actual numbers from Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.account.post_summary` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.account.post_summary` LIMIT 1;",
      "columns": [
        { "name": "account", "type": "bytea", "description": "Account address" },
        { "name": "feed", "type": "bytea", "description": "Feed identifier" },
        { "name": "total_posts", "type": "integer", "description": "Total number of posts" },
        { "name": "total_comments", "type": "integer", "description": "Total number of comments" },
        { "name": "total_reposts", "type": "integer", "description": "Total number of reposts" },
        { "name": "total_quotes", "type": "integer", "description": "Total number of quotes" },
        { "name": "total_reacted", "type": "integer", "description": "Total times account reacted" },
        { "name": "total_reactions", "type": "integer", "description": "Total reactions received" },
        { "name": "total_collects", "type": "integer", "description": "Total collects" },
        { "name": "updated_at", "type": "timestamp with time zone", "description": "Last update time" },
        { "name": "total_main", "type": "integer", "description": "Total main posts" },
        { "name": "total_tips", "type": "integer", "description": "Total tips" }
      ]
    },
    "account.reacted_summary": {
      "name": "account.reacted_summary",
      "description": "Summarizes reactions by account. Previous was global_stats.profile_reacted in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.account.reacted_summary` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.account.reacted_summary` LIMIT 1;",
      "columns": [
        { "name": "account", "type": "bytea", "description": "Account address" },
        { "name": "reaction_type", "type": "USER-DEFINED", "description": "Type of reaction" },
        { "name": "total", "type": "integer", "description": "Total count" }
      ]
    },
    "account.reaction_summary": {
      "name": "account.reaction_summary",
      "description": "Summarizes reactions on account content. Previous was global_stats.profile_reaction in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.account.reaction_summary` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.account.reaction_summary` LIMIT 1;",
      "columns": [
        { "name": "account", "type": "bytea", "description": "Account address" },
        { "name": "reaction_type", "type": "USER-DEFINED", "description": "Type of reaction" },
        { "name": "total", "type": "integer", "description": "Total count" }
      ]
    },
    "account.universal_action_config": {
      "name": "account.universal_action_config",
      "description": "Stores universal action configurations.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.account.universal_action_config` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.account.universal_action_config` LIMIT 1;",
      "columns": [
        { "name": "id", "type": "integer", "description": "Unique identifier" },
        { "name": "action_address", "type": "bytea", "description": "Action address" },
        { "name": "type", "type": "USER-DEFINED", "description": "Action type" },
        { "name": "raw_config_params", "type": "jsonb", "description": "Raw configuration parameters" },
        { "name": "decoded_config_params", "type": "jsonb", "description": "Decoded configuration parameters" },
        { "name": "timestamp", "type": "timestamp with time zone", "description": "Configuration time" },
        { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "account.username_assigned": {
      "name": "account.username_assigned",
      "description": "Records username assignments. Previous was namespace.handle_link in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.account.username_assigned` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.account.username_assigned` LIMIT 1;",
      "columns": [
        { "name": "id", "type": "integer", "description": "Unique identifier" },
        { "name": "account", "type": "bytea", "description": "Account address" },
        { "name": "namespace", "type": "bytea", "description": "Namespace identifier" },
        { "name": "local_name", "type": "character varying", "description": "Local username" },
        { "name": "block_hash", "type": "bytea", "description": "Hash of the block containing this record" },
        { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
        { "name": "timestamp", "type": "timestamp with time zone", "description": "Assignment time" },
        { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "app.account_post_summary": {
      "name": "app.account_post_summary",
      "description": "Summarizes post statistics for accounts by app. Previous was app_stats.profile in Lens V2. Repost/Mirros are not migrated from Lens V2. Total_reposts may not represent the actual numbers from Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.app.account_post_summary` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.app.account_post_summary` LIMIT 1;",
      "columns": [
          { "name": "account", "type": "bytea", "description": "Account address" },
          { "name": "feed", "type": "bytea", "description": "Feed identifier" },
          { "name": "app", "type": "bytea", "description": "App identifier" },
          { "name": "total_main", "type": "integer", "description": "Total main posts" },
          { "name": "total_comments", "type": "integer", "description": "Total comments" },
          { "name": "total_reposts", "type": "integer", "description": "Total reposts" },
          { "name": "total_quotes", "type": "integer", "description": "Total quotes" },
          { "name": "total_posts", "type": "integer", "description": "Total posts" },
          { "name": "total_reacted", "type": "integer", "description": "Total times account reacted" },
          { "name": "total_reactions", "type": "integer", "description": "Total reactions received" },
          { "name": "total_collects", "type": "integer", "description": "Total collects" },
          { "name": "updated_at", "type": "timestamp with time zone", "description": "Last update time" },
          { "name": "total_tips", "type": "integer", "description": "Total tips" }
      ]
    },
    "app.account_reacted_summary": {
      "name": "app.account_reacted_summary",
      "description": "Summarizes reactions by account per app. Previous was app_stats.profile_reacted in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.app.account_reacted_summary` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.app.account_reacted_summary` LIMIT 1;",
      "columns": [
          { "name": "account", "type": "bytea", "description": "Account address" },
          { "name": "app", "type": "bytea", "description": "App identifier" },
          { "name": "reaction_type", "type": "USER-DEFINED", "description": "Type of reaction" },
          { "name": "total", "type": "integer", "description": "Total count" }
      ]
    },
    "app.account_reaction_summary": {
      "name": "app.account_reaction_summary",
      "description": "Summarizes reactions on account content per app.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.app.account_reaction_summary` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.app.account_reaction_summary` LIMIT 1;",
      "columns": [
          { "name": "account", "type": "bytea", "description": "Account address" },
          { "name": "app", "type": "bytea", "description": "App identifier" },
          { "name": "reaction_type", "type": "USER-DEFINED", "description": "Type of reaction" },
          { "name": "total", "type": "integer", "description": "Total count" }
      ]
    },
    "app.feed": {
      "name": "app.feed",
      "description": "Records app feeds.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.app.feed` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.app.feed` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "app", "type": "bytea", "description": "App identifier" },
          { "name": "feed", "type": "bytea", "description": "Feed identifier" },
          { "name": "block_hash", "type": "bytea", "description": "Hash of the block containing this record" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Record time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "app.group": {
      "name": "app.group",
      "description": "Records app groups.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.app.group` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.app.group` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "app", "type": "bytea", "description": "App identifier" },
          { "name": "group", "type": "bytea", "description": "Group identifier" },
          { "name": "block_hash", "type": "bytea", "description": "Hash of the block containing this record" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Record time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "app.metadata": {
      "name": "app.metadata",
      "description": "Stores app metadata.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.app.metadata` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.app.metadata` LIMIT 1;",
      "columns": [
          { "name": "app", "type": "bytea", "description": "App identifier" },
          { "name": "metadata_uri", "type": "character varying", "description": "URI for the metadata" },
          { "name": "metadata_snapshot_location_url", "type": "character varying", "description": "URL for metadata snapshot" },
          { "name": "metadata", "type": "jsonb", "description": "Stored metadata" },
          { "name": "name", "type": "character varying", "description": "App name" },
          { "name": "icon", "type": "character varying", "description": "App icon URL" },
          { "name": "tagline", "type": "character varying", "description": "App tagline" },
          { "name": "description", "type": "character varying", "description": "App description" },
          { "name": "website", "type": "character varying", "description": "App website" },
          { "name": "metadata_version", "type": "character", "description": "Metadata version" },
          { "name": "created_on", "type": "timestamp with time zone", "description": "Creation time" }
      ]
    },
    "app.post_feed_tag_summary": {
      "name": "app.post_feed_tag_summary",
      "description": "Summarizes post tags by feed and app.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.app.post_feed_tag_summary` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.app.post_feed_tag_summary` LIMIT 1;",
      "columns": [
          { "name": "tag", "type": "character varying", "description": "Tag name" },
          { "name": "app", "type": "bytea", "description": "App identifier" },
          { "name": "feed", "type": "bytea", "description": "Feed identifier" },
          { "name": "total", "type": "integer", "description": "Total count" }
      ]
    },
    "app.post_reaction_summary": {
      "name": "app.post_reaction_summary",
      "description": "Summarizes post reactions by app. Previous was app_stats.publication_reaction in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.app.post_reaction_summary` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.app.post_reaction_summary` LIMIT 1;",
      "columns": [
          { "name": "post", "type": "bytea", "description": "Post identifier" },
          { "name": "app", "type": "bytea", "description": "App identifier" },
          { "name": "reaction_type", "type": "USER-DEFINED", "description": "Type of reaction" },
          { "name": "total", "type": "integer", "description": "Total count" }
      ]
    },
    "app.post_summary": {
      "name": "app.post_summary",
      "description": "Summarizes post statistics by app. Previous was app_stats.publication in Lens V2. Repost/Mirros are not migrated from Lens V2. Total_reposts may not represent the actual numbers from Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.app.post_summary` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.app.post_summary` LIMIT 1;",
      "columns": [
          { "name": "post", "type": "bytea", "description": "Post identifier" },
          { "name": "app", "type": "bytea", "description": "App identifier" },
          { "name": "total_amount_of_collects", "type": "integer", "description": "Total collects" },
          { "name": "total_amount_of_collects_by_flagged_accounts", "type": "integer", "description": "Collects by flagged accounts" },
          { "name": "total_amount_of_acted", "type": "integer", "description": "Total actions" },
          { "name": "total_amount_of_acted_by_flagged_accounts", "type": "integer", "description": "Actions by flagged accounts" },
          { "name": "total_amount_of_reposts", "type": "integer", "description": "Total reposts" },
          { "name": "total_amount_of_reposts_by_flagged_accounts", "type": "integer", "description": "Reposts by flagged accounts" },
          { "name": "total_amount_of_comments", "type": "integer", "description": "Total comments" },
          { "name": "total_amount_of_comments_by_flagged_accounts", "type": "integer", "description": "Comments by flagged accounts" },
          { "name": "total_amount_of_comments_hidden_by_author", "type": "integer", "description": "Comments hidden by author" },
          { "name": "total_amount_of_quotes", "type": "integer", "description": "Total quotes" },
          { "name": "total_amount_of_quotes_by_flagged_accounts", "type": "integer", "description": "Quotes by flagged accounts" },
          { "name": "total_reactions", "type": "integer", "description": "Total reactions" },
          { "name": "total_reactions_by_flagged_accounts", "type": "integer", "description": "Reactions by flagged accounts" },
          { "name": "total_bookmarks", "type": "integer", "description": "Total bookmarks" },
          { "name": "total_bookmarks_by_flagged_accounts", "type": "integer", "description": "Bookmarks by flagged accounts" },
          { "name": "total_amount_of_tips", "type": "integer", "description": "Total tips" },
          { "name": "total_amount_of_tips_by_flagged_accounts", "type": "integer", "description": "Tips by flagged accounts" }
      ]
    },
    "app.post_tag_summary": {
      "name": "app.post_tag_summary",
      "description": "Summarizes post tags by app. Previous was app_stats.publication_tag in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.app.post_tag_summary` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.app.post_tag_summary` LIMIT 1;",
      "columns": [
          { "name": "tag", "type": "character varying", "description": "Tag name" },
          { "name": "app", "type": "bytea", "description": "App identifier" },
          { "name": "total", "type": "integer", "description": "Total count" }
      ]
    },
    "app.record": {
      "name": "app.record",
      "description": "Stores app records.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.app.record` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.app.record` LIMIT 1;",
      "columns": [
          { "name": "app", "type": "bytea", "description": "App identifier" },
          { "name": "graph", "type": "bytea", "description": "Graph identifier" },
          { "name": "graph_last_updated_sequence_id", "type": "numeric", "description": "Graph update sequence ID" },
          { "name": "sponsorship", "type": "bytea", "description": "Sponsorship identifier" },
          { "name": "sponsorship_last_updated_sequence_id", "type": "numeric", "description": "Sponsorship update sequence ID" },
          { "name": "namespace", "type": "bytea", "description": "Namespace identifier" },
          { "name": "namespace_last_updated_sequence_id", "type": "numeric", "description": "Namespace update sequence ID" },
          { "name": "default_feed", "type": "bytea", "description": "Default feed identifier" },
          { "name": "default_feed_last_updated_sequence_id", "type": "numeric", "description": "Default feed update sequence ID" },
          { "name": "treasury", "type": "bytea", "description": "Treasury address" },
          { "name": "treasury_last_updated_sequence_id", "type": "numeric", "description": "Treasury update sequence ID" },
          { "name": "source_stamp_verification_set", "type": "boolean", "description": "Source stamp verification status" },
          { "name": "source_stamp_verification_set_last_updated_sequence_id", "type": "numeric", "description": "Source stamp verification update sequence ID" },
          { "name": "block_hash", "type": "bytea", "description": "Hash of the block containing this record" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Record time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "app.signer": {
      "name": "app.signer",
      "description": "Records app signers.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.app.signer` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.app.signer` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "app", "type": "bytea", "description": "App identifier" },
          { "name": "signer", "type": "bytea", "description": "Signer address" },
          { "name": "block_hash", "type": "bytea", "description": "Hash of the block containing this record" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Record time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "app.user": {
      "name": "app.user",
      "description": "Records app users.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.app.user` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.app.user` LIMIT 1;",
      "columns": [
          { "name": "app", "type": "bytea", "description": "App identifier" },
          { "name": "account", "type": "bytea", "description": "User account address" },
          { "name": "first_action_on", "type": "timestamp with time zone", "description": "First action time" },
          { "name": "last_action_on", "type": "timestamp with time zone", "description": "Last action time" }
      ]
    },
    "feed.metadata": {
      "name": "feed.metadata",
      "description": "Stores feed metadata.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.feed.metadata` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.feed.metadata` LIMIT 1;",
      "columns": [
          { "name": "feed", "type": "bytea", "description": "Feed identifier" },
          { "name": "metadata_uri", "type": "character varying", "description": "URI for the metadata" },
          { "name": "metadata_snapshot_location_url", "type": "character varying", "description": "URL for metadata snapshot" },
          { "name": "metadata", "type": "jsonb", "description": "Stored metadata" },
          { "name": "name", "type": "character varying", "description": "Feed name" },
          { "name": "description", "type": "character varying", "description": "Feed description" },
          { "name": "metadata_version", "type": "character", "description": "Metadata version" },
          { "name": "created_on", "type": "timestamp with time zone", "description": "Creation time" }
      ]
    },
    "feed.record": {
      "name": "feed.record",
      "description": "Stores feed records.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.feed.record` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.feed.record` LIMIT 1;",
      "columns": [
          { "name": "feed", "type": "bytea", "description": "Feed identifier" },
          { "name": "block_hash", "type": "bytea", "description": "Hash of the block containing this record" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Record time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "feed.record_stats": {
      "name": "feed.record_stats",
      "description": "Records feed usage statistics.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.feed.record_stats` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.feed.record_stats` LIMIT 1;",
      "columns": [
          { "name": "feed", "type": "bytea", "description": "Feed identifier" },
          { "name": "used_by_apps_total", "type": "integer", "description": "Total app usage count" }
      ]
    },
    "graph.metadata": {
      "name": "graph.metadata",
      "description": "Stores graph metadata.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.graph.metadata` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.graph.metadata` LIMIT 1;",
      "columns": [
          { "name": "graph", "type": "bytea", "description": "Graph identifier" },
          { "name": "metadata_uri", "type": "character varying", "description": "URI for the metadata" },
          { "name": "metadata_snapshot_location_url", "type": "character varying", "description": "URL for metadata snapshot" },
          { "name": "metadata", "type": "jsonb", "description": "Stored metadata" },
          { "name": "name", "type": "character varying", "description": "Graph name" },
          { "name": "description", "type": "character varying", "description": "Graph description" },
          { "name": "metadata_version", "type": "character", "description": "Metadata version" },
          { "name": "created_on", "type": "timestamp with time zone", "description": "Creation time" }
      ]
    },
    "graph.record": {
      "name": "graph.record",
      "description": "Stores graph records.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.graph.record` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.graph.record` LIMIT 1;",
      "columns": [
          { "name": "graph", "type": "bytea", "description": "Graph identifier" },
          { "name": "block_hash", "type": "bytea", "description": "Hash of the block containing this record" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Record time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "graph.record_stats": {
      "name": "graph.record_stats",
      "description": "Records graph usage statistics.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.graph.record_stats` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.graph.record_stats` LIMIT 1;",
      "columns": [
          { "name": "graph", "type": "bytea", "description": "Graph identifier" },
          { "name": "used_by_apps_total", "type": "integer", "description": "Total app usage count" }
      ]
    },
    "group.banned": {
      "name": "group.banned",
      "description": "Records banned group members.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.group.banned` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.group.banned` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "group", "type": "bytea", "description": "Group identifier" },
          { "name": "config_salt", "type": "bytea", "description": "Configuration salt" },
          { "name": "account", "type": "bytea", "description": "Banned account address" },
          { "name": "banned_by_account", "type": "bytea", "description": "Account that performed the ban" },
          { "name": "block_hash", "type": "bytea", "description": "Hash of the block containing this record" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Ban time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "group.member": {
      "name": "group.member",
      "description": "Records group members.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.group.member` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.group.member` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "group", "type": "bytea", "description": "Group identifier" },
          { "name": "account", "type": "bytea", "description": "Member account address" },
          { "name": "block_hash", "type": "bytea", "description": "Hash of the block containing this record" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Membership time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "group.membership_approval_requests": {
      "name": "group.membership_approval_requests",
      "description": "Records membership approval requests.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.group.membership_approval_requests` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.group.membership_approval_requests` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "group", "type": "bytea", "description": "Group identifier" },
          { "name": "config_salt", "type": "bytea", "description": "Configuration salt" },
          { "name": "account", "type": "bytea", "description": "Requesting account address" },
          { "name": "block_hash", "type": "bytea", "description": "Hash of the block containing this record" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Request time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "group.metadata": {
      "name": "group.metadata",
      "description": "Stores group metadata.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.group.metadata` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.group.metadata` LIMIT 1;",
      "columns": [
          { "name": "group", "type": "bytea", "description": "Group identifier" },
          { "name": "metadata_uri", "type": "character varying", "description": "URI for the metadata" },
          { "name": "metadata_snapshot_location_url", "type": "character varying", "description": "URL for metadata snapshot" },
          { "name": "metadata", "type": "jsonb", "description": "Stored metadata" },
          { "name": "name", "type": "character varying", "description": "Group name" },
          { "name": "icon", "type": "character varying", "description": "Group icon URL" },
          { "name": "description", "type": "character varying", "description": "Group description" },
          { "name": "metadata_version", "type": "character", "description": "Metadata version" },
          { "name": "created_on", "type": "timestamp with time zone", "description": "Creation time" }
      ]
    },
    "group.record": {
      "name": "group.record",
      "description": "Stores group records.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.group.record` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.group.record` LIMIT 1;",
      "columns": [
          { "name": "group", "type": "bytea", "description": "Group identifier" },
          { "name": "block_hash", "type": "bytea", "description": "Hash of the block containing this record" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Record time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "group.record_stats": {
      "name": "group.record_stats",
      "description": "Stores group statistics.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.group.record_stats` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.group.record_stats` LIMIT 1;",
      "columns": [
          { "name": "group", "type": "bytea", "description": "Group identifier" },
          { "name": "members_total", "type": "integer", "description": "Total number of members" }
      ]
    },
    "metadata.failed": {
      "name": "metadata.failed",
      "description": "Records failed metadata processing. Previous was publication.failed in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.metadata.failed` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.metadata.failed` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "source", "type": "character varying", "description": "Source name" },
          { "name": "account", "type": "bytea", "description": "Related account identifier" },
          { "name": "graph", "type": "bytea", "description": "Related graph identifier" },
          { "name": "post", "type": "bytea", "description": "Related post identifier" },
          { "name": "feed", "type": "bytea", "description": "Related feed identifier" },
          { "name": "group", "type": "bytea", "description": "Related group identifier" },
          { "name": "sponsorship", "type": "bytea", "description": "Related sponsorship identifier" },
          { "name": "app", "type": "bytea", "description": "Related app identifier" },
          { "name": "namespace", "type": "bytea", "description": "Related namespace identifier" },
          { "name": "metadata_uri", "type": "character varying", "description": "Metadata URI" },
          { "name": "reason", "type": "character varying", "description": "Failure reason" },
          { "name": "created_on", "type": "timestamp with time zone", "description": "Failure time" },
          { "name": "action", "type": "bytea", "description": "Related action identifier" }
      ]
    },
    "metadata.pending": {
      "name": "metadata.pending",
      "description": "Records pending metadata processing. Previous was publication.pending in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.metadata.pending` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.metadata.pending` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "source", "type": "character varying", "description": "Source name" },
          { "name": "account", "type": "bytea", "description": "Related account identifier" },
          { "name": "graph", "type": "bytea", "description": "Related graph identifier" },
          { "name": "post", "type": "bytea", "description": "Related post identifier" },
          { "name": "feed", "type": "bytea", "description": "Related feed identifier" },
          { "name": "group", "type": "bytea", "description": "Related group identifier" },
          { "name": "sponsorship", "type": "bytea", "description": "Related sponsorship identifier" },
          { "name": "app", "type": "bytea", "description": "Related app identifier" },
          { "name": "namespace", "type": "bytea", "description": "Related namespace identifier" },
          { "name": "metadata_uri", "type": "character varying", "description": "Metadata URI" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" },
          { "name": "created_on", "type": "timestamp with time zone", "description": "Creation time" },
          { "name": "action", "type": "bytea", "description": "Related action identifier" }
      ]
    },
    "metadata.refresh": {
      "name": "metadata.refresh",
      "description": "Tracks metadata refresh requests.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.metadata.refresh` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.metadata.refresh` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "uuid", "description": "Unique identifier" },
          { "name": "entity", "type": "text", "description": "Entity being refreshed" },
          { "name": "status", "type": "USER-DEFINED", "description": "Refresh status" },
          { "name": "reason", "type": "text", "description": "Refresh reason" },
          { "name": "updated_at", "type": "timestamp with time zone", "description": "Last update time" },
          { "name": "created_at", "type": "timestamp with time zone", "description": "Creation time" }
      ]
    },
    "ml.account_score": {
      "name": "ml.account_score",
      "description": "Records quality scores for accounts. Previous was machine_learning.quality_profiles in Lens V2. Quality score used to be [0 - 10000] in V2. In V3, score is rescaled to [0 - 100] with 2 decimal point decision",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.ml.account_score` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.ml.account_score` LIMIT 1;",
      "columns": [
          { "name": "account", "type": "bytea", "description": "Account identifier" },
          { "name": "score", "type": "numeric", "description": "Quality score. Ranging from [0 - 100]" },
          { "name": "generated_at", "type": "timestamp with time zone", "description": "Score generation time" }
      ]
    },
    "ml.for_you_global_timeline": {
      "name": "ml.for_you_global_timeline",
      "description": "Stores data for personalized \"For You\" feeds. Previous was machine_learning.for_you_global_feed in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.ml.for_you_global_timeline` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.ml.for_you_global_timeline` LIMIT 1;",
      "columns": [
          { "name": "post", "type": "bytea", "description": "Post identifier" },
          { "name": "account", "type": "bytea", "description": "Account identifier" },
          { "name": "rank", "type": "integer", "description": "Ranking position" },
          { "name": "source", "type": "character varying", "description": "Source of ranking" },
          { "name": "generated_at", "type": "timestamp with time zone", "description": "Generation time" }
      ]
    },
    "ml.popularity_trending_timeline": {
      "name": "ml.popularity_trending_timeline",
      "description": "Tracks trending posts based on popularity. Previous was machine_learning.popularity_trending_feed in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.ml.popularity_trending_timeline` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.ml.popularity_trending_timeline` LIMIT 1;",
      "columns": [
          { "name": "post", "type": "bytea", "description": "Post identifier" },
          { "name": "account", "type": "bytea", "description": "Account identifier" },
          { "name": "score", "type": "integer", "description": "Popularity score" },
          { "name": "generated_at", "type": "timestamp with time zone", "description": "Generation time" }
      ]
    },
    "ml.reply_ranking": {
      "name": "ml.reply_ranking",
      "description": "Ranks replies for improved display. Previous was machine_learning.reply_ranking in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.ml.reply_ranking` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.ml.reply_ranking` LIMIT 1;",
      "columns": [
          { "name": "parent_post", "type": "bytea", "description": "Parent post identifier" },
          { "name": "post", "type": "bytea", "description": "Reply post identifier" },
          { "name": "score", "type": "integer", "description": "Ranking score" },
          { "name": "generated_at", "type": "timestamp with time zone", "description": "Generation time" }
      ]
    },
    "post.account_mention": {
      "name": "post.account_mention",
      "description": "Records account mentions in posts.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.post.account_mention` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.post.account_mention` LIMIT 1;",
      "columns": [
          { "name": "mention_id", "type": "integer", "description": "Unique identifier" },
          { "name": "post", "type": "bytea", "description": "Post identifier" },
          { "name": "account", "type": "bytea", "description": "Mentioned account" },
          { "name": "namespace", "type": "bytea", "description": "Namespace identifier" },
          { "name": "snapshot_username_used", "type": "character varying", "description": "Username used in mention" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Mention time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "post.action": {
      "name": "post.action",
      "description": "Records post actions. Previous was publication.open_action_module_multirecipient in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.post.action` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.post.action` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "post", "type": "bytea", "description": "Post identifier" },
          { "name": "implementation", "type": "bytea", "description": "Implementation address" },
          { "name": "setup_data", "type": "text", "description": "Setup data" },
          { "name": "setup_return_data", "type": "text", "description": "Setup return data" },
          { "name": "collect_limit", "type": "character varying", "description": "Collection limit" },
          { "name": "collect_nft_address", "type": "bytea", "description": "Collect NFT address" },
          { "name": "amount", "type": "character varying", "description": "Action amount" },
          { "name": "follower_only", "type": "boolean", "description": "Follower-only restriction" },
          { "name": "currency", "type": "bytea", "description": "Currency address" },
          { "name": "recipients", "type": "ARRAY", "description": "Recipients list" },
          { "name": "referral_fee", "type": "numeric", "description": "Referral fee percentage" },
          { "name": "end_timestamp", "type": "timestamp with time zone", "description": "End time" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "block_hash", "type": "bytea", "description": "Block hash" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Action time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "post.action_config": {
      "name": "post.action_config",
      "description": "Stores post action configurations.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.post.action_config` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.post.action_config` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "action_address", "type": "bytea", "description": "Action address" },
          { "name": "type", "type": "USER-DEFINED", "description": "Action type" },
          { "name": "feed", "type": "bytea", "description": "Feed identifier" },
          { "name": "post_id", "type": "bytea", "description": "Post identifier" },
          { "name": "setup_by_account", "type": "bytea", "description": "Setup account" },
          { "name": "decoded_config_params", "type": "jsonb", "description": "Decoded config parameters" },
          { "name": "disabled", "type": "boolean", "description": "Whether action is disabled" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Configuration time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" },
          { "name": "disable_extra_data", "type": "bytea", "description": "Disable extra data" },
          { "name": "enable_extra_data", "type": "bytea", "description": "Enable extra data" },
          { "name": "last_updated_sequence_id", "type": "numeric", "description": "Last update sequence ID" },
          { "name": "return_data", "type": "bytea", "description": "Return data" },
          { "name": "raw_config_params", "type": "jsonb", "description": "Raw config parameters" },
          { "name": "app", "type": "bytea", "description": "App identifier" },
          { "name": "collect_nft_address", "type": "bytea", "description": "Collect NFT address" }
      ]
    },
    "post.action_executed": {
      "name": "post.action_executed",
      "description": "Records executed post actions.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.post.action_executed` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.post.action_executed` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "action_address", "type": "bytea", "description": "Action address" },
          { "name": "type", "type": "USER-DEFINED", "description": "Action type" },
          { "name": "feed", "type": "bytea", "description": "Feed identifier" },
          { "name": "post_id", "type": "bytea", "description": "Post identifier" },
          { "name": "raw_params", "type": "bytea", "description": "Raw parameters" },
          { "name": "decoded_params", "type": "jsonb", "description": "Decoded parameters" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Execution time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" },
          { "name": "app", "type": "bytea", "description": "App identifier" },
          { "name": "account", "type": "bytea", "description": "Executing account" }
      ]
    },
    "post.action_executed_by_account_count": {
      "name": "post.action_executed_by_account_count",
      "description": "Counts actions executed by accounts on posts.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.post.action_executed_by_account_count` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.post.action_executed_by_account_count` LIMIT 1;",
      "columns": [
          { "name": "action_address", "type": "bytea", "description": "Action address" },
          { "name": "post_id", "type": "bytea", "description": "Post identifier" },
          { "name": "by_account", "type": "bytea", "description": "Executing account" },
          { "name": "total", "type": "integer", "description": "Execution count" }
      ]
    },
    "post.action_executed_count": {
      "name": "post.action_executed_count",
      "description": "Counts actions executed on posts.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.post.action_executed_count` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.post.action_executed_count` LIMIT 1;",
      "columns": [
          { "name": "action_address", "type": "bytea", "description": "Action address" },
          { "name": "post_id", "type": "bytea", "description": "Post identifier" },
          { "name": "total", "type": "integer", "description": "Execution count" }
      ]
    },
    "post.action_metadata": {
      "name": "post.action_metadata",
      "description": "Stores metadata for post actions.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.post.action_metadata` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.post.action_metadata` LIMIT 1;",
      "columns": [
          { "name": "action", "type": "bytea", "description": "Action identifier" },
          { "name": "metadata_uri", "type": "character varying", "description": "Metadata URI" },
          { "name": "metadata_snapshot_location_url", "type": "character varying", "description": "Metadata snapshot URL" },
          { "name": "metadata", "type": "jsonb", "description": "Stored metadata" },
          { "name": "name", "type": "character varying", "description": "Action name" },
          { "name": "description", "type": "character varying", "description": "Action description" },
          { "name": "metadata_version", "type": "character", "description": "Metadata version" },
          { "name": "created_on", "type": "timestamp with time zone", "description": "Creation time" }
      ]
    },
    "post.extra_data": {
      "name": "post.extra_data",
      "description": "Stores extra data for posts.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.post.extra_data` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.post.extra_data` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "key", "type": "bytea", "description": "Data key" },
          { "name": "value", "type": "bytea", "description": "Data value" },
          { "name": "post", "type": "bytea", "description": "Post identifier" },
          { "name": "block_hash", "type": "bytea", "description": "Block hash" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Record time" },
          { "name": "last_updated_sequence_id", "type": "numeric", "description": "Last update sequence ID" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "post.feed_tag_summary": {
      "name": "post.feed_tag_summary",
      "description": "Summarizes post tags by feed.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.post.feed_tag_summary` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.post.feed_tag_summary` LIMIT 1;",
      "columns": [
          { "name": "tag", "type": "character varying", "description": "Tag name" },
          { "name": "feed", "type": "bytea", "description": "Feed identifier" },
          { "name": "total", "type": "integer", "description": "Usage count" }
      ]
    },
    "post.group_mention": {
      "name": "post.group_mention",
      "description": "Records group mentions in posts.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.post.group_mention` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.post.group_mention` LIMIT 1;",
      "columns": [
          { "name": "mention_id", "type": "integer", "description": "Unique identifier" },
          { "name": "post", "type": "bytea", "description": "Post identifier" },
          { "name": "group", "type": "bytea", "description": "Mentioned group" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Mention time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "post.hashtag": {
      "name": "post.hashtag",
      "description": "Records hashtags used in posts. Previous was publication.hashtag in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.post.hashtag` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.post.hashtag` LIMIT 1;",
      "columns": [
          { "name": "post", "type": "bytea", "description": "Post identifier" },
          { "name": "hashtag", "type": "character varying", "description": "Hashtag text" }
      ]
    },
    "post.metadata": {
      "name": "post.metadata",
      "description": "Stores post metadata. Previous was publication.metadata in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.post.metadata` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.post.metadata` LIMIT 1;",
      "columns": [
          { "name": "post", "type": "bytea", "description": "Post identifier" },
          { "name": "metadata_snapshot_location_url", "type": "character varying", "description": "Metadata snapshot URL" },
          { "name": "metadata", "type": "jsonb", "description": "Stored metadata" },
          { "name": "metadata_version", "type": "character", "description": "Metadata version" },
          { "name": "content", "type": "text", "description": "Post content" },
          { "name": "content_vector", "type": "tsvector", "description": "Content vector for search" },
          { "name": "language", "type": "character", "description": "Language code" },
          { "name": "region", "type": "character", "description": "Region code" },
          { "name": "content_warning", "type": "USER-DEFINED", "description": "Content warning type" },
          { "name": "main_content_focus", "type": "USER-DEFINED", "description": "Main content focus" },
          { "name": "tags_vector", "type": "tsvector", "description": "Tags vector for search" },
          { "name": "is_encrypted", "type": "boolean", "description": "Whether content is encrypted" },
          { "name": "created_at", "type": "timestamp with time zone", "description": "Creation time" },
          { "name": "app", "type": "bytea", "description": "App identifier" }
      ]
    },
    "post.metadata_edited": {
      "name": "post.metadata_edited",
      "description": "Records edited post metadata.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.post.metadata_edited` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.post.metadata_edited` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "post", "type": "bytea", "description": "Post identifier" },
          { "name": "metadata_snapshot_location_url", "type": "character varying", "description": "Metadata snapshot URL" },
          { "name": "metadata", "type": "jsonb", "description": "Stored metadata" },
          { "name": "metadata_version", "type": "character", "description": "Metadata version" },
          { "name": "content", "type": "text", "description": "Edited content" },
          { "name": "content_vector", "type": "tsvector", "description": "Content vector for search" },
          { "name": "language", "type": "character", "description": "Language code" },
          { "name": "region", "type": "character", "description": "Region code" },
          { "name": "content_warning", "type": "USER-DEFINED", "description": "Content warning type" },
          { "name": "main_content_focus", "type": "USER-DEFINED", "description": "Main content focus" },
          { "name": "tags_vector", "type": "tsvector", "description": "Tags vector for search" },
          { "name": "is_encrypted", "type": "boolean", "description": "Whether content is encrypted" },
          { "name": "created_at", "type": "timestamp with time zone", "description": "Edit time" }
      ]
    },
    "post.reaction": {
      "name": "post.reaction",
      "description": "Records reactions to posts. Previous was publication.reaction in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.post.reaction` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.post.reaction` LIMIT 1;",
      "columns": [
          { "name": "post", "type": "bytea", "description": "Post identifier" },
          { "name": "account", "type": "bytea", "description": "Reacting account" },
          { "name": "type", "type": "USER-DEFINED", "description": "Reaction type" },
          { "name": "action_at", "type": "timestamp with time zone", "description": "Reaction time" },
          { "name": "app", "type": "bytea", "description": "App identifier" }
      ]
    },
    "post.reaction_summary": {
      "name": "post.reaction_summary",
      "description": "Summarizes reactions to posts. Previous was global_stats.publication_reaction in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.post.reaction_summary` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.post.reaction_summary` LIMIT 1;",
      "columns": [
          { "name": "post", "type": "bytea", "description": "Post identifier" },
          { "name": "reaction_type", "type": "USER-DEFINED", "description": "Reaction type" },
          { "name": "total", "type": "integer", "description": "Reaction count" }
      ]
    },
    "post.record": {
      "name": "post.record",
      "description": "Stores post records. Previous was publication.record in Lens V2. Corresponding clustered table post.record_clustered_by_account is available for better performance on account column.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.post.record` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.post.record` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "bytea", "description": "Post identifier" },
          { "name": "feed_local_sequential_id", "type": "bytea", "description": "Feed sequential ID" },
          { "name": "legacy_id", "type": "character varying", "description": "Legacy post ID" },
          { "name": "feed", "type": "bytea", "description": "Feed identifier" },
          { "name": "account", "type": "bytea", "description": "Author account" },
          { "name": "content_uri", "type": "character varying", "description": "Content URI" },
          { "name": "post_types", "type": "JSON", "description": "Post types" },
          { "name": "parent_post", "type": "bytea", "description": "Parent post" },
          { "name": "quoted_post", "type": "bytea", "description": "Quoted post" },
          { "name": "root_post", "type": "bytea", "description": "Root post" },
          { "name": "app", "type": "bytea", "description": "App identifier" },
          { "name": "metadata_passed", "type": "boolean", "description": "Whether metadata passed validation" },
          { "name": "is_deleted", "type": "boolean", "description": "Whether post is deleted" },
          { "name": "is_hidden_by_parent", "type": "boolean", "description": "Whether hidden by parent" },
          { "name": "is_edited", "type": "boolean", "description": "Whether post is edited" },
          { "name": "block_hash", "type": "bytea", "description": "Block hash" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Post time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" },
          { "name": "slug", "type": "character varying", "description": "URL slug" }
      ]
    },
    "post.rule_config": {
      "name": "post.rule_config",
      "description": "Stores post rule configurations.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.post.rule_config` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.post.rule_config` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "rule_address", "type": "bytea", "description": "Rule address" },
          { "name": "config_salt", "type": "bytea", "description": "Configuration salt" },
          { "name": "type", "type": "USER-DEFINED", "description": "Rule type" },
          { "name": "feed", "type": "bytea", "description": "Feed identifier" },
          { "name": "post_id", "type": "bytea", "description": "Post identifier" },
          { "name": "raw_config_params", "type": "jsonb", "description": "Raw config parameters" },
          { "name": "decoded_config_params", "type": "jsonb", "description": "Decoded config parameters" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Configuration time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" },
          { "name": "last_updated_sequence_id", "type": "numeric", "description": "Last update sequence ID" }
      ]
    },
    "post.rule_selector": {
      "name": "post.rule_selector",
      "description": "Stores post rule selectors.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.post.rule_selector` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.post.rule_selector` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "config_salt", "type": "bytea", "description": "Configuration salt" },
          { "name": "selector", "type": "USER-DEFINED", "description": "Rule selector" },
          { "name": "is_required", "type": "boolean", "description": "Whether rule is required" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Configuration time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" },
          { "name": "feed", "type": "bytea", "description": "Feed identifier" },
          { "name": "post_id", "type": "bytea", "description": "Post identifier" },
          { "name": "rule_address", "type": "bytea", "description": "Rule address" }
      ]
    },
    "post.summary": {
      "name": "post.summary",
      "description": "Summarizes post statistics. Previous was global_stats.publication in Lens V2. Repost/Mirros are not migrated from Lens V2. Total_reposts may not represent the actual numbers from Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.post.summary` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.post.summary` LIMIT 1;",
      "columns": [
          { "name": "post", "type": "bytea", "description": "Post identifier" },
          { "name": "total_amount_of_collects", "type": "integer", "description": "Total collects" },
          { "name": "total_amount_of_collects_by_flagged_accounts", "type": "integer", "description": "Collects by flagged accounts" },
          { "name": "total_amount_of_acted", "type": "integer", "description": "Total actions" },
          { "name": "total_amount_of_acted_by_flagged_accounts", "type": "integer", "description": "Actions by flagged accounts" },
          { "name": "total_amount_of_reposts", "type": "integer", "description": "Total reposts" },
          { "name": "total_amount_of_reposts_by_flagged_accounts", "type": "integer", "description": "Reposts by flagged accounts" },
          { "name": "total_amount_of_comments", "type": "integer", "description": "Total comments" },
          { "name": "total_amount_of_comments_by_flagged_accounts", "type": "integer", "description": "Comments by flagged accounts" },
          { "name": "total_amount_of_comments_hidden_by_author", "type": "integer", "description": "Comments hidden by author" },
          { "name": "total_amount_of_quotes", "type": "integer", "description": "Total quotes" },
          { "name": "total_amount_of_quotes_by_flagged_accounts", "type": "integer", "description": "Quotes by flagged accounts" },
          { "name": "total_reactions", "type": "integer", "description": "Total reactions" },
          { "name": "total_reactions_by_flagged_accounts", "type": "integer", "description": "Reactions by flagged accounts" },
          { "name": "total_bookmarks", "type": "integer", "description": "Total bookmarks" },
          { "name": "total_bookmarks_by_flagged_accounts", "type": "integer", "description": "Bookmarks by flagged accounts" },
          { "name": "total_amount_of_tips", "type": "integer", "description": "Total tips" },
          { "name": "total_amount_of_tips_by_flagged_accounts", "type": "integer", "description": "Tips by flagged accounts" }
      ]
    },
    "post.tag": {
      "name": "post.tag",
      "description": "Records tags used in posts. Previous was publication.tag in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.post.tag` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.post.tag` LIMIT 1;",
      "columns": [
          { "name": "post", "type": "bytea", "description": "Post identifier" },
          { "name": "tag", "type": "character varying", "description": "Tag text" },
          { "name": "tag_vector", "type": "tsvector", "description": "Tag vector for search" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Tag time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "post.tag_summary": {
      "name": "post.tag_summary",
      "description": "Summarizes tag usage. Previous was global_stats.publication_tag in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.post.tag_summary` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.post.tag_summary` LIMIT 1;",
      "columns": [
          { "name": "tag", "type": "character varying", "description": "Tag text" },
          { "name": "total", "type": "integer", "description": "Usage count" }
      ]
    },
    "post.universal_action_config": {
      "name": "post.universal_action_config",
      "description": "Stores universal action configurations for posts.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.post.universal_action_config` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.post.universal_action_config` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "action_address", "type": "bytea", "description": "Action address" },
          { "name": "type", "type": "USER-DEFINED", "description": "Action type" },
          { "name": "raw_config_params", "type": "jsonb", "description": "Raw config parameters" },
          { "name": "decoded_config_params", "type": "jsonb", "description": "Decoded config parameters" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Configuration time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "rule.config": {
      "name": "rule.config",
      "description": "Stores rule configurations.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.rule.config` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.rule.config` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "rule_address", "type": "bytea", "description": "Rule address" },
          { "name": "config_salt", "type": "bytea", "description": "Configuration salt" },
          { "name": "type", "type": "USER-DEFINED", "description": "Rule type" },
          { "name": "primitive", "type": "bytea", "description": "Primitive address" },
          { "name": "raw_config_params", "type": "jsonb", "description": "Raw config parameters" },
          { "name": "decoded_config_params", "type": "jsonb", "description": "Decoded config parameters" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Configuration time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" },
          { "name": "last_updated_sequence_id", "type": "numeric", "description": "Last update sequence ID" }
      ]
    },
    "rule.selector": {
      "name": "rule.selector",
      "description": "Stores rule selectors.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.rule.selector` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.rule.selector` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "config_salt", "type": "bytea", "description": "Configuration salt" },
          { "name": "selector", "type": "USER-DEFINED", "description": "Rule selector" },
          { "name": "is_required", "type": "boolean", "description": "Whether rule is required" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Configuration time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" },
          { "name": "primitive", "type": "bytea", "description": "Primitive address" },
          { "name": "rule_address", "type": "bytea", "description": "Rule address" }
      ]
    },
    "sponsorship.exclusive": {
      "name": "sponsorship.exclusive",
      "description": "Records exclusive sponsorships.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.sponsorship.exclusive` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.sponsorship.exclusive` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "sponsorship", "type": "bytea", "description": "Sponsorship identifier" },
          { "name": "label", "type": "character varying", "description": "Sponsorship label" },
          { "name": "address", "type": "bytea", "description": "Address" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "block_hash", "type": "bytea", "description": "Block hash" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Record time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "sponsorship.funds_spent": {
      "name": "sponsorship.funds_spent",
      "description": "Records spent sponsorship funds.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.sponsorship.funds_spent` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.sponsorship.funds_spent` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "sponsorship", "type": "bytea", "description": "Sponsorship identifier" },
          { "name": "scoped_grant_id", "type": "bytea", "description": "Grant identifier" },
          { "name": "amount", "type": "bytea", "description": "Amount spent" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "block_hash", "type": "bytea", "description": "Block hash" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Spending time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "sponsorship.grant_given": {
      "name": "sponsorship.grant_given",
      "description": "Records sponsorship grants.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.sponsorship.grant_given` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.sponsorship.grant_given` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "sponsorship", "type": "bytea", "description": "Sponsorship identifier" },
          { "name": "scoped_grant_id", "type": "bytea", "description": "Grant identifier" },
          { "name": "amount", "type": "bytea", "description": "Grant amount" },
          { "name": "is_revoke", "type": "boolean", "description": "Whether grant is revoked" },
          { "name": "actioned_by", "type": "bytea", "description": "Account that performed the action" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "block_hash", "type": "bytea", "description": "Block hash" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Grant time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "sponsorship.metadata": {
      "name": "sponsorship.metadata",
      "description": "Stores sponsorship metadata.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.sponsorship.metadata` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.sponsorship.metadata` LIMIT 1;",
      "columns": [
          { "name": "sponsorship", "type": "bytea", "description": "Sponsorship identifier" },
          { "name": "metadata_uri", "type": "character varying", "description": "Metadata URI" },
          { "name": "metadata_snapshot_location_url", "type": "character varying", "description": "Metadata snapshot URL" },
          { "name": "metadata", "type": "jsonb", "description": "Stored metadata" },
          { "name": "name", "type": "character varying", "description": "Sponsorship name" },
          { "name": "description", "type": "character varying", "description": "Sponsorship description" },
          { "name": "metadata_version", "type": "character", "description": "Metadata version" },
          { "name": "created_on", "type": "timestamp with time zone", "description": "Creation time" }
      ]
    },
    "sponsorship.rate_limit": {
      "name": "sponsorship.rate_limit",
      "description": "Records sponsorship rate limits.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.sponsorship.rate_limit` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.sponsorship.rate_limit` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "sponsorship", "type": "bytea", "description": "Sponsorship identifier" },
          { "name": "global_window", "type": "USER-DEFINED", "description": "Global time window" },
          { "name": "global_limit", "type": "numeric", "description": "Global limit" },
          { "name": "user_window", "type": "USER-DEFINED", "description": "User time window" },
          { "name": "user_limit", "type": "numeric", "description": "User limit" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "block_hash", "type": "bytea", "description": "Block hash" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Rate limit time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" },
          { "name": "last_updated_sequence_id", "type": "numeric", "description": "Last update sequence ID" }
      ]
    },
    "sponsorship.record": {
      "name": "sponsorship.record",
      "description": "Stores sponsorship records.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.sponsorship.record` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.sponsorship.record` LIMIT 1;",
      "columns": [
          { "name": "sponsorship", "type": "bytea", "description": "Sponsorship identifier" },
          { "name": "block_hash", "type": "bytea", "description": "Block hash" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Record time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" },
          { "name": "is_paused", "type": "boolean", "description": "Whether sponsorship is paused" },
          { "name": "paused_last_updated_sequence_id", "type": "numeric", "description": "Pause update sequence ID" }
      ]
    },
    "sponsorship.signer": {
      "name": "sponsorship.signer",
      "description": "Records sponsorship signers.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.sponsorship.signer` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.sponsorship.signer` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "sponsorship", "type": "bytea", "description": "Sponsorship identifier" },
          { "name": "label", "type": "character varying", "description": "Signer label" },
          { "name": "address", "type": "bytea", "description": "Signer address" },
          { "name": "is_lens_backend_signer", "type": "boolean", "description": "Whether signer is Lens backend" },
          { "name": "block_hash", "type": "bytea", "description": "Block hash" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Signer time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "username.metadata": {
      "name": "username.metadata",
      "description": "Stores username namespace metadata.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.username.metadata` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.username.metadata` LIMIT 1;",
      "columns": [
          { "name": "namespace", "type": "bytea", "description": "Namespace identifier" },
          { "name": "metadata_uri", "type": "character varying", "description": "Metadata URI" },
          { "name": "metadata_snapshot_location_url", "type": "character varying", "description": "Metadata snapshot URL" },
          { "name": "metadata", "type": "jsonb", "description": "Stored metadata" },
          { "name": "name", "type": "character varying", "description": "Namespace name" },
          { "name": "description", "type": "character varying", "description": "Namespace description" },
          { "name": "metadata_version", "type": "character", "description": "Metadata version" },
          { "name": "created_on", "type": "timestamp with time zone", "description": "Creation time" }
      ]
    },
    "username.namespace_record": {
      "name": "username.namespace_record",
      "description": "Records username namespaces. Previous was namespace.record in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.username.namespace_record` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.username.namespace_record` LIMIT 1;",
      "columns": [
          { "name": "address", "type": "bytea", "description": "Namespace address" },
          { "name": "namespace", "type": "character varying", "description": "Namespace name" },
          { "name": "block_hash", "type": "bytea", "description": "Block hash" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Record time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "username.namespace_record_stats": {
      "name": "username.namespace_record_stats",
      "description": "Records namespace statistics.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.username.namespace_record_stats` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.username.namespace_record_stats` LIMIT 1;",
      "columns": [
          { "name": "namespace", "type": "bytea", "description": "Namespace identifier" },
          { "name": "usernames_total", "type": "integer", "description": "Total usernames count" }
      ]
    },
    "username.record": {
      "name": "username.record",
      "description": "Stores username records. Previous was namespace.handle in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.username.record` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.username.record` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "namespace", "type": "bytea", "description": "Namespace identifier" },
          { "name": "local_name", "type": "character varying", "description": "Local username" },
          { "name": "account", "type": "bytea", "description": "Account address" },
          { "name": "rule_data", "type": "bytea", "description": "Rule data" },
          { "name": "block_hash", "type": "bytea", "description": "Block hash" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Record time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" },
          { "name": "is_simple_charset", "type": "boolean", "description": "Whether simple charset is used" },
          { "name": "token_id", "type": "bytea", "description": "Token ID" },
          { "name": "last_transfer_updated_sequence_id", "type": "numeric", "description": "Last transfer sequence ID" }
      ]
    },
    "username.reserved": {
      "name": "username.reserved",
      "description": "Records reserved usernames.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.username.reserved` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.username.reserved` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "namespace", "type": "bytea", "description": "Namespace identifier" },
          { "name": "local_name", "type": "character varying", "description": "Reserved username" },
          { "name": "config_salt", "type": "bytea", "description": "Configuration salt" },
          { "name": "block_hash", "type": "bytea", "description": "Block hash" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Reservation time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "currencies.record": {
      "name": "currencies.record",
      "description": "Records supported currencies. Previous was enabled.currency in Lens V2",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.currencies.record` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.currencies.record` LIMIT 1;",
      "columns": [
          { "name": "currency", "type": "bytea", "description": "Currency address" },
          { "name": "name", "type": "character varying", "description": "Currency name" },
          { "name": "pretty_name", "type": "character varying", "description": "Formatted currency name" },
          { "name": "symbol", "type": "character varying", "description": "Currency symbol" },
          { "name": "decimals", "type": "integer", "description": "Decimal places" },
          { "name": "verified", "type": "boolean", "description": "Verification status" },
          { "name": "block_hash", "type": "bytea", "description": "Hash of the block containing this record" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Record time" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    },
    "transaction.known_transactions": {
      "name": "transaction.known_transactions",
      "description": "Records known transactions.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.transaction.known_transactions` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.transaction.known_transactions` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "indexing_status", "type": "USER-DEFINED", "description": "Indexing status" },
          { "name": "failed_reason", "type": "character varying", "description": "Failure reason" },
          { "name": "block_hash", "type": "bytea", "description": "Block hash" },
          { "name": "block_timestamp", "type": "timestamp with time zone", "description": "Block timestamp" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" },
          { "name": "operation", "type": "USER-DEFINED", "description": "Operation type" },
          { "name": "dependencies_operations", "type": "JSON", "description": "Dependent operations" }
      ]
    },
    "extra_data.record": {
      "name": "extra_data.record",
      "description": "Stores extra data records.",
      "mainnet_query": "SELECT * FROM `lens-protocol-mainnet.extra_data.record` LIMIT 1;",
      "testnet_query": "SELECT * FROM `lens-protocol-testnet.extra_data.record` LIMIT 1;",
      "columns": [
          { "name": "id", "type": "integer", "description": "Unique identifier" },
          { "name": "key", "type": "bytea", "description": "Key" },
          { "name": "value", "type": "bytea", "description": "Value" },
          { "name": "primitive", "type": "bytea", "description": "Primitive" },
          { "name": "block_hash", "type": "bytea", "description": "Hash of the block containing this record" },
          { "name": "tx_hash", "type": "bytea", "description": "Transaction hash" },
          { "name": "timestamp", "type": "timestamp with time zone", "description": "Record time" },
          { "name": "last_updated_sequence_id", "type": "numeric", "description": "Last update sequence ID" },
          { "name": "sequence_id", "type": "numeric", "description": "Sequence identifier" }
      ]
    }
  }
  