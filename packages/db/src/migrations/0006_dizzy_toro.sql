ALTER TABLE `user_subscription` ADD `user_subscribed` integer NOT NULL;--> statement-breakpoint
ALTER TABLE `user_subscription` DROP COLUMN `subscribed`;