/*
 유저는 루틴 여러개를 갖는다.
 루틴은 운동 여러개를 갖는다.
 */


CREATE TABLE `user` (
	`id` INT AUTO_INCREMENT,
	`email` VARCHAR(100) NOT NULL,
	`password` VARCHAR(100) NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE KEY (`id`,`email`)
);
CREATE TABLE `routine` (
    `id` INT AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `user_id` INT,
    FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
    PRIMARY KEY (`id`),
    UNIQUE KEY (`id`)
);
CREATE TABLE `workout` (
    `id` INT AUTO_INCREMENT,
    `name` VARCHAR(256) NOT NULL,
    `weight` INT NOT NULL,
    `rep` INT NOT NULL,
    `set` INT NOT NULL,
    `routine_id` INT,
    FOREIGN KEY (`routine_id`) REFERENCES `routine` (`id`),
    PRIMARY KEY (`id`),
    UNIQUE KEY (`id`)
);