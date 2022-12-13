const btnMarkAllAsRead = document.querySelector(".mark_all_as_read");
const notification = document.querySelector(".notification");
const allNotification = document.querySelectorAll(".new");
const notificationsTitle = document.querySelector(".notifications");
const notificationCount = document.querySelector(".notifications__count");
const friendProfilePic = document.querySelector(".acc_profile_picture");
const friendAction = document.querySelector(".action");
const friendEvent = document.querySelector(".event");
const notificationsContainer = document.querySelector(".container");

const friend1 = {
  profilePicture: "assets/images/avatar-mark-webber.webp",
  accName: "Mark Webber",
  accAction: "reacted to your recent post",
  accEvent: "my first tournament today!",
};
const friend2 = {
  profilePicture: "assets/images/avatar-angela-gray.webp",
  accName: "Angela Gray",
  accAction: "followed you",
  accEvent: " ",
};

const friend3 = {
  profilePicture: "assets/images/avatar-jacob-thompson.webp",
  accName: "Jacob Thompson",
  accAction: "has joined your group",
  accEvent: "Chess Club",
};
const friend4 = {
  profilePicture: "assets/images/avatar-rizky-hasanuddin.webp",
  accName: "Rizky Hasanuddin",
  accAction: "sent you a private message",
  message:
    "Hello, thanks for setting up the chess club, i've been a member for a few weeks and i'm ready having a lots of fun.",
  accEvent: " ",
};
const friend5 = {
  profilePicture: "assets/images/avatar-kimberly-smith.webp",
  accName: "Kimberly Smith",
  accAction: "Commented on your photo",
  accEvent: " ",
};
const friend6 = {
  profilePicture: "assets/images/avatar-nathan-peterson.webp",
  accName: "Nathan Peterson",
  accAction: "reacted to your recent post",
  accEvent: "5 end-game strategies to increase your win rate",
};
const friend7 = {
  profilePicture: "assets/images/avatar-anna-kim.webp",
  accName: "Anna Kim",
  accAction: "left the group",
  accEvent: "Chess Club",
};

// prettier-ignore
const notificationsList = [friend1,friend2,friend3,friend4,friend5,friend6,friend7];

const getData = function (friend) {
  const html = `
  <div class="notification new">
  <div class="read_notification d-flex align-items-center">
    <div class="notification_content">
      <div class="d-flex align-items-center">
        <img
          src="${friend.profilePicture}"
          class="pe-3 acc_profile_picture"
          alt="${friend.accName}"
        />
        <p class="action">
        <span class="acc_name">${friend.accName}</span>
          ${friend.accAction} ${
    friend.accEvent
      ? `<span class="event new-event">${friend.accEvent}</span>`
      : ""
  }
        </p>
      </div>
      ${
        friend.message
          ? `<div class="priv_msg border mt-4 p-4">
      <p class="message">
        ${friend.message}
      </p>
    </div>`
          : ""
      }
      </div>
      </div>
    </div>
    `;
  notificationsContainer.insertAdjacentHTML("beforeend", html);
};

const displayNotificationsList = function () {
  notificationsList.forEach((notification) => getData(notification));
};

displayNotificationsList();

notificationsContainer.addEventListener("click", function (e) {
  let readNotification = e.target.closest(".read_notification");
  if (!readNotification) return;
  readNotification.closest(".new").classList.remove("new");
  notificationsCount();
});

btnMarkAllAsRead.addEventListener("click", function () {
  // prettier-ignore
  const newNotifications = notificationsContainer.querySelectorAll(".notification");
  newNotifications.forEach((notif) => notif.classList.remove("new"));
  notificationsCount();
});

const notificationsCount = function () {
  const notifications = Array.from(
    notificationsContainer.querySelectorAll(".new")
  );
  let newNotifications = notifications.filter((notif) =>
    notif.classList.contains("new")
  );

  notificationCount.textContent = newNotifications.length;
};
notificationsCount();
