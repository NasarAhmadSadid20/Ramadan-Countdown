document.addEventListener("DOMContentLoaded", function () {
    const ramadanStartDate = new Date(2025, 2, 10, 0, 0, 0); 
    const ramadanEndDate = new Date(ramadanStartDate);
    ramadanEndDate.setDate(ramadanEndDate.getDate() + 30); 

    const countdownInterval = setInterval(() => {
        const now = new Date();
        let timeRemaining, message;

        if (now < ramadanStartDate) {
            timeRemaining = ramadanStartDate - now;
            message = "تا شروع رمضان:";
        } else if (now < ramadanEndDate) {
            timeRemaining = ramadanEndDate - now;
            message = "تا پایان رمضان:";
            document.getElementById('countdown-message').innerHTML = "<h2>🌙 رمضان مبارک! 🌙</h2>";
        } else {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = "<h2>رمضان به پایان رسید! 🙏</h2>";
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
       
        document.getElementById('countdown-message').innerHTML = `<h3>${message}</h3>`;
        document.getElementById('days').innerHTML = days;
      
    }, 1000);
});
