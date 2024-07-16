document.addEventListener("DOMContentLoaded", function () {
    const challenges = [
        {
            image: "img/challenge1.png",
            title: "[ 아침 러닝 챌린지 ]",
            description: "하루 30분 아침에 함께 달릴 분을 찾습니다!",
            status: "진행중",
            dates: "2024.07.01 ~ 2024.07.31"
        },
        {
            image: "img/challenge1.png",
            title: "[ 아침 러닝 챌린지 ]",
            description: "하루 30분 아침에 함께 달릴 분을 찾습니다!",
            status: "종료",
            dates: "2024.06.01 ~ 2024.06.30"
        },
        // Add more challenge objects as needed
    ];

    const challengeList = document.getElementById("challenge-list");

    challenges.forEach(challenge => {
        const card = document.createElement("div");
        card.className = "challenge-card";
        
        const img = document.createElement("img");
        img.src = challenge.image;
        img.alt = "Challenge Image";

        const info = document.createElement("div");
        info.className = "challenge-info";

        const title = document.createElement("h3");
        title.textContent = challenge.title;

        const description = document.createElement("p");
        description.textContent = challenge.description;

        const meta = document.createElement("div");
        meta.className = "challenge-meta";

        const challengeTitle = document.createElement("span");
        challengeTitle.textContent = "아침 러닝 챌린지";

        const status = document.createElement("span");
        status.className = `status ${challenge.status === "진행중" ? "ongoing" : "finished"}`;
        status.textContent = challenge.status;

        const dates = document.createElement("span");
        dates.className = "dates";
        dates.textContent = challenge.dates;

        meta.appendChild(challengeTitle);
        meta.appendChild(status);
        meta.appendChild(dates);

        info.appendChild(title);
        info.appendChild(description);
        info.appendChild(meta);

        card.appendChild(img);
        card.appendChild(info);

        challengeList.appendChild(card);
    });
});
