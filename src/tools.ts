import { DynamicTool } from "@langchain/core/tools";
import { chainTablesSchemas, protocolTablesSchemas } from "./schemas";
import { sendQuery } from "./db";

export const chainTablesAvailableTool = () => new DynamicTool({
    name: "chainTablesAvailable",
    description: `Check all the tables available on the chain bigquery dataset NO INPUT REQUIRED`,
    func: async (input: string) => {
        try {

            return JSON.stringify({
                tables: [
                    {
                        name: "addresses",
                        description: "This table stores information about all addresses on the network, including smart contracts.",
                    },
                    {
                        name: "blocks",
                        description: "This table contains information about each block in the blockchain.",
                    },
                    {
                        name: "transactions",
                        description: "This table stores all transactions processed on the network.",
                    },
                    {
                        name: "transactionReceipts",
                        description: "This table contains the receipts generated after transaction execution.",
                    },
                    {
                        name: "logs",
                        description: "This table stores event logs emitted during transaction execution.",
                    },
                    {
                        name: "transfers",
                        description: "This table records all asset transfers that occur on the network.",
                    },
                    {
                        name: "addressTransfers",
                        description: "This table maps addresses to their transfers for efficient querying.",
                    },
                    {
                        name: "addressTransactions",
                        description: "This table maps addresses to transactions for efficient querying.",
                    },
                    {
                        name: "tokens",
                        description: "This table stores information about tokens on the network.",
                    },
                    {
                        name: "balances",
                        description: "This table tracks token balances for addresses.",
                    },
                    {
                        name: "batches",
                        description: "This table stores information about Layer 2 batch processing for rollups.",
                    },
                    
                ]
            });

        } catch (error) {
            console.error(`Error calling ChainTables API: ${error}`);
            return { error: "Failed to call ChainTables API" };
        }
    }
});

export const chainProtocolTablesAvailableTool = () => new DynamicTool({
    name: "chainProtocolTablesAvailable",
    description: `Check all the tables available on the chain protocol bigquery dataset NO INPUT REQUIRED`,
    func: async (input: string) => {
        return JSON.stringify({
                tables: [
                  {
                    "name": "account.acted",
                    "description": "Records actions performed by accounts on posts. Previous was publication.open_action_module_acted_record in Lens V2"
                  },
                  {
                    "name": "account.action_config",
                    "description": "Stores action configurations for accounts."
                  },
                  {
                    "name": "account.action_executed",
                    "description": "Logs executed actions by accounts."
                  },
                  {
                    "name": "account.action_executed_by_account_count",
                    "description": "Counts actions executed by specific accounts."
                  },
                  {
                    "name": "account.action_executed_count",
                    "description": "Counts actions executed on specific accounts."
                  },
                  {
                    "name": "account.action_metadata",
                    "description": "Stores metadata for account actions."
                  },
                  {
                    "name": "account.blocked",
                    "description": "Records blocked accounts. Previous was profile.blocked in Lens V2"
                  },
                  {
                    "name": "account.bookmarked_post",
                    "description": "Stores posts bookmarked by accounts. Previous was personalisation.bookmarked_publication in Lens V2"
                  },
                  {
                    "name": "account.follow_rule_config",
                    "description": "Configurations for follow rules."
                  },
                  {
                    "name": "account.follow_rule_selector",
                    "description": "Selectors for follow rules."
                  },
                  {
                    "name": "account.follower",
                    "description": "Records follower relationships. Previous was profile.follower in Lens V2"
                  },
                  {
                    "name": "account.follower_summary",
                    "description": "Summarizes follower statistics. Previous was global_stats.profile_follower in Lens V2. Corresponding clustered table account.follower_summary_clustered_by_account is available for better performance on account column."
                  },
                  {
                    "name": "account.known_smart_wallet",
                    "description": "Records known smart wallets."
                  },
                  {
                    "name": "account.manager",
                    "description": "Records account managers. Previous was profile.manager in Lens V2"
                  },
                  {
                    "name": "account.metadata",
                    "description": "Stores account metadata. Previous was profile.metadata in Lens V2"
                  },
                  {
                    "name": "account.notification",
                    "description": "Stores account notifications. Previous was notification.record in Lens V2"
                  },
                  {
                    "name": "account.peer_to_peer_recommendation",
                    "description": "Records peer-to-peer account recommendations. Previous was profile.peer_to_peer_recommendation in Lens V2"
                  },
                  {
                    "name": "account.post_summary",
                    "description": "Summarizes post statistics for accounts. Previous was global_stats.profile in Lens V2. Corresponding clustered table account.post_summary_clustered_by_account is available for better performance on account column. Repost/Mirros are not migrated from Lens V2. Total_reposts may not represent the actual numbers from Lens V2"
                  },
                  {
                    "name": "account.reacted_summary",
                    "description": "Summarizes reactions by account. Previous was global_stats.profile_reacted in Lens V2"
                  },
                  {
                    "name": "account.reaction_summary",
                    "description": "Summarizes reactions on account content. Previous was global_stats.profile_reaction in Lens V2"
                  },
                  {
                    "name": "account.universal_action_config",
                    "description": "Stores universal action configurations."
                  },
                  {
                    "name": "account.username_assigned",
                    "description": "Records username assignments. Previous was namespace.handle_link in Lens V2"
                  },
                  {
                    "name": "app.account_post_summary",
                    "description": "Summarizes post statistics for accounts by app. Previous was app_stats.profile in Lens V2. Repost/Mirros are not migrated from Lens V2. Total_reposts may not represent the actual numbers from Lens V2"
                  },
                  {
                    "name": "app.account_reacted_summary",
                    "description": "Summarizes reactions by account per app. Previous was app_stats.profile_reacted in Lens V2"
                  },
                  {
                    "name": "app.account_reaction_summary",
                    "description": "Summarizes reactions on account content per app."
                  },
                  {
                    "name": "app.feed",
                    "description": "Records app feeds."
                  },
                  {
                    "name": "app.group",
                    "description": "Records app groups."
                  },
                  {
                    "name": "app.metadata",
                    "description": "Stores app metadata."
                  },
                  {
                    "name": "app.post_feed_tag_summary",
                    "description": "Summarizes post tags by feed and app."
                  },
                  {
                    "name": "app.post_reaction_summary",
                    "description": "Summarizes post reactions by app. Previous was app_stats.publication_reaction in Lens V2"
                  },
                  {
                    "name": "app.post_summary",
                    "description": "Summarizes post statistics by app. Previous was app_stats.publication in Lens V2. Repost/Mirros are not migrated from Lens V2. Total_reposts may not represent the actual numbers from Lens V2"
                  },
                  {
                    "name": "app.post_tag_summary",
                    "description": "Summarizes post tags by app. Previous was app_stats.publication_tag in Lens V2"
                  },
                  {
                    "name": "app.record",
                    "description": "Stores app records."
                  },
                  {
                    "name": "app.signer",
                    "description": "Records app signers."
                  },
                  {
                    "name": "app.user",
                    "description": "Records app users."
                  },
                  {
                    "name": "feed.metadata",
                    "description": "Stores feed metadata."
                  },
                  {
                    "name": "feed.record",
                    "description": "Stores feed records."
                  },
                  {
                    "name": "feed.record_stats",
                    "description": "Records feed usage statistics."
                  },
                  {
                    "name": "graph.metadata",
                    "description": "Stores graph metadata."
                  },
                  {
                    "name": "graph.record",
                    "description": "Stores graph records."
                  },
                  {
                    "name": "graph.record_stats",
                    "description": "Records graph usage statistics."
                  },
                  {
                    "name": "group.banned",
                    "description": "Records banned group members."
                  },
                  {
                    "name": "group.member",
                    "description": "Records group members."
                  },
                  {
                    "name": "group.membership_approval_requests",
                    "description": "Records membership approval requests."
                  },
                  {
                    "name": "group.metadata",
                    "description": "Stores group metadata."
                  },
                  {
                    "name": "group.record",
                    "description": "Stores group records."
                  },
                  {
                    "name": "group.record_stats",
                    "description": "Stores group statistics."
                  },
                  {
                    "name": "metadata.failed",
                    "description": "Records failed metadata processing. Previous was publication.failed in Lens V2"
                  },
                  {
                    "name": "metadata.pending",
                    "description": "Records pending metadata processing. Previous was publication.pending in Lens V2"
                  },
                  {
                    "name": "metadata.refresh",
                    "description": "Tracks metadata refresh requests."
                  },
                  {
                    "name": "ml.account_score",
                    "description": "Records quality scores for accounts. Previous was machine_learning.quality_profiles in Lens V2. Quality score used to be [0 - 10000] in V2. In V3, score is rescaled to [0 - 100] with 2 decimal point decision"
                  },
                  {
                    "name": "ml.for_you_global_timeline",
                    "description": "Stores data for personalized \"For You\" feeds. Previous was machine_learning.for_you_global_feed in Lens V2"
                  },
                  {
                    "name": "ml.popularity_trending_timeline",
                    "description": "Tracks trending posts based on popularity. Previous was machine_learning.popularity_trending_feed in Lens V2"
                  },
                  {
                    "name": "ml.reply_ranking",
                    "description": "Ranks replies for improved display. Previous was machine_learning.reply_ranking in Lens V2"
                  },
                  {
                    "name": "post.account_mention",
                    "description": "Records account mentions in posts."
                  },
                  {
                    "name": "post.action",
                    "description": "Records post actions. Previous was publication.open_action_module_multirecipient in Lens V2"
                  },
                  {
                    "name": "post.action_config",
                    "description": "Stores post action configurations."
                  },
                  {
                    "name": "post.action_executed",
                    "description": "Records executed post actions."
                  },
                  {
                    "name": "post.action_executed_by_account_count",
                    "description": "Counts actions executed by accounts on posts."
                  },
                  {
                    "name": "post.action_executed_count",
                    "description": "Counts actions executed on posts."
                  },
                  {
                    "name": "post.action_metadata",
                    "description": "Stores metadata for post actions."
                  },
                  {
                    "name": "post.extra_data",
                    "description": "Stores extra data for posts."
                  },
                  {
                    "name": "post.feed_tag_summary",
                    "description": "Summarizes post tags by feed."
                  },
                  {
                    "name": "post.group_mention",
                    "description": "Records group mentions in posts."
                  },
                  {
                    "name": "post.hashtag",
                    "description": "Records hashtags used in posts. Previous was publication.hashtag in Lens V2"
                  },
                  {
                    "name": "post.metadata",
                    "description": "Stores post metadata. Previous was publication.metadata in Lens V2"
                  },
                  {
                    "name": "post.metadata_edited",
                    "description": "Records edited post metadata."
                  },
                  {
                    "name": "post.reaction",
                    "description": "Records reactions to posts. Previous was publication.reaction in Lens V2"
                  },
                  {
                    "name": "post.reaction_summary",
                    "description": "Summarizes reactions to posts. Previous was global_stats.publication_reaction in Lens V2"
                  },
                  {
                    "name": "post.record",
                    "description": "Stores post records. Previous was publication.record in Lens V2. Corresponding clustered table post.record_clustered_by_account is available for better performance on account column."
                  },
                  {
                    "name": "post.rule_config",
                    "description": "Stores post rule configurations."
                  },
                  {
                    "name": "post.rule_selector",
                    "description": "Stores post rule selectors."
                  },
                  {
                    "name": "post.summary",
                    "description": "Summarizes post statistics. Previous was global_stats.publication in Lens V2. Repost/Mirros are not migrated from Lens V2. Total_reposts may not represent the actual numbers from Lens V2"
                  },
                  {
                    "name": "post.tag",
                    "description": "Records tags used in posts. Previous was publication.tag in Lens V2"
                  },
                  {
                    "name": "post.tag_summary",
                    "description": "Summarizes tag usage. Previous was global_stats.publication_tag in Lens V2"
                  },
                  {
                    "name": "post.universal_action_config",
                    "description": "Stores universal action configurations for posts."
                  },
                  {
                    "name": "rule.config",
                    "description": "Stores rule configurations."
                  },
                  {
                    "name": "rule.selector",
                    "description": "Stores rule selectors."
                  },
                  {
                    "name": "sponsorship.exclusive",
                    "description": "Records exclusive sponsorships."
                  },
                  {
                    "name": "sponsorship.funds_spent",
                    "description": "Records spent sponsorship funds."
                  },
                  {
                    "name": "sponsorship.grant_given",
                    "description": "Records sponsorship grants."
                  },
                  {
                    "name": "sponsorship.metadata",
                    "description": "Stores sponsorship metadata."
                  },
                  {
                    "name": "sponsorship.rate_limit",
                    "description": "Records sponsorship rate limits."
                  },
                  {
                    "name": "sponsorship.record",
                    "description": "Stores sponsorship records."
                  },
                  {
                    "name": "sponsorship.signer",
                    "description": "Records sponsorship signers."
                  },
                  {
                    "name": "username.metadata",
                    "description": "Stores username namespace metadata."
                  },
                  {
                    "name": "username.namespace_record",
                    "description": "Records username namespaces. Previous was namespace.record in Lens V2"
                  },
                  {
                    "name": "username.namespace_record_stats",
                    "description": "Records namespace statistics."
                  },
                  {
                    "name": "username.record",
                    "description": "Stores username records. Previous was namespace.handle in Lens V2"
                  },
                  {
                    "name": "username.reserved",
                    "description": "Records reserved usernames."
                  },
                  {
                    "name": "currencies.record",
                    "description": "Records supported currencies. Previous was enabled.currency in Lens V2"
                  },
                  {
                    "name": "transaction.known_transactions",
                    "description": "Records known transactions."
                  },
                  {
                    "name": "extra_data.record",
                    "description": "Stores extra data records."
                  }
                ]
        });
    }
});


export const chainTablesSchemaTool = () => new DynamicTool({
    name: "chainTablesSchema",
    description: `Return the schema of a table on the chain bigquery dataset.Required input: table name Example input: "addresses"`,
    func: async (input: string) => {
        try {
            const table = input.trim();
            if (!table) {
                return { error: "Table name is required" };
            }

            const schema = chainTablesSchemas[table];
            return JSON.stringify({
                schema: schema,
            });
        } catch (error) {
            console.error(`Error calling ChainTables API: ${error}`);
            return { error: "Failed to call ChainTables API" };
        }
    }
});


export const chainProtocolTablesSchemaTool = () => new DynamicTool({
    name: "chainProtocolTablesSchema",
    description: `Return the schema of a table on the chain bigquery dataset.Required input: table name Example input: "addresses"`,
    func: async (input: string) => {
        try {
            const table = input.trim();
            if (!table) {
                return { error: "Table name is required" };
            }

            const schema = protocolTablesSchemas[table];
            return JSON.stringify({
                schema: schema,
            });
        } catch (error) {
            console.error(`Error calling ChainTables API: ${error}`);
            return { error: "Failed to call ChainTables API" };
        }
    }
});


export const executeQueryTool = () => new DynamicTool({
    name: "executeQueryTool",
    description: `Execute a query on the chain bigquery dataset.Required input: query Example input: "SELECT * FROM addresses"`,
    func: async (input: string) => {
        try {
            const query = input.trim();
            if (!query) {
                return { error: "Query is required" };
            }

            const result = await sendQuery(query);
            return JSON.stringify({
                result: result,
            });
        } catch (error) {
            console.error(`Error calling ChainTables API: ${error}`);
    }
});
