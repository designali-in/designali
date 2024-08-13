CREATE TABLE `user_subscription` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`stripe_subscription_id` text NOT NULL,
	`stripe_customer_id` text NOT NULL,
	`stripe_price_id` text NOT NULL,
	`stripe_current_period_end` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_id_idx` ON `user_subscription` (`user_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `stripe_subscription_id_idx` ON `user_subscription` (`stripe_subscription_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `stripe_customer_id_idx` ON `user_subscription` (`stripe_customer_id`);