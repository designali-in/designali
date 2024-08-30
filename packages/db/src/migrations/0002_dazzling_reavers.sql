CREATE TABLE `cart` (
	`id` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	`sessionCartId` text NOT NULL,
	`items` text DEFAULT '[]' NOT NULL,
	`itemsPrice` integer NOT NULL,
	`shippingPrice` integer NOT NULL,
	`taxPrice` integer NOT NULL,
	`totalPrice` integer NOT NULL,
	`created_at` integer DEFAULT (strftime('%s', 'now')) NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
