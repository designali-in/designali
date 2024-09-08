CREATE TABLE `counters` (
	`slug` integer PRIMARY KEY NOT NULL,
	`views` integer DEFAULT 0 NOT NULL,
	`likes` integer DEFAULT 0 NOT NULL,
	`loves` integer DEFAULT 0 NOT NULL,
	`awards` integer DEFAULT 0 NOT NULL,
	`bookmarks` integer DEFAULT 0 NOT NULL
);
