-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    UNIQUE INDEX `User_id_key`(`id`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ParticipantsInRoom` (
    `userId` VARCHAR(191) NOT NULL,
    `roomId` VARCHAR(191) NOT NULL,
    `roomEnter` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `roomExit` DATETIME(3) NULL,
    `isHost` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`userId`, `roomId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Room` (
    `id` VARCHAR(191) NOT NULL,
    `type` ENUM('INSTANT', 'SCHEDULE') NOT NULL DEFAULT 'INSTANT',
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `startTime` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `endTime` DATETIME(3) NULL,
    `summary` VARCHAR(191) NULL,
    `chats` VARCHAR(191) NULL,
    `createdById` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    UNIQUE INDEX `Room_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FriendShip` (
    `userId` VARCHAR(191) NOT NULL,
    `friendId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`userId`, `friendId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InvitedUsersOnRoom` (
    `userId` VARCHAR(191) NOT NULL,
    `roomId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`userId`, `roomId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Call` (
    `id` VARCHAR(191) NOT NULL,
    `startTime` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `endTime` DATETIME(3) NULL,
    `callerId` VARCHAR(191) NOT NULL,
    `receiverId` VARCHAR(191) NOT NULL,
    `status` ENUM('CALLING', 'COMPLETED', 'MISSED', 'NO_ANSWER', 'REJECTED') NOT NULL DEFAULT 'CALLING',
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    UNIQUE INDEX `Call_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notification` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `fromUserId` VARCHAR(191) NOT NULL,
    `type` ENUM('MISSED', 'INVITED') NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `trigger` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Notification_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ParticipantsInRoom` ADD CONSTRAINT `ParticipantsInRoom_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ParticipantsInRoom` ADD CONSTRAINT `ParticipantsInRoom_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FriendShip` ADD CONSTRAINT `FriendShip_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FriendShip` ADD CONSTRAINT `FriendShip_friendId_fkey` FOREIGN KEY (`friendId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InvitedUsersOnRoom` ADD CONSTRAINT `InvitedUsersOnRoom_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InvitedUsersOnRoom` ADD CONSTRAINT `InvitedUsersOnRoom_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Call` ADD CONSTRAINT `Call_callerId_fkey` FOREIGN KEY (`callerId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Call` ADD CONSTRAINT `Call_receiverId_fkey` FOREIGN KEY (`receiverId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_fromUserId_fkey` FOREIGN KEY (`fromUserId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
