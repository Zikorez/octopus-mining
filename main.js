$(document).ready(function() {
    let balance = 0;

    $('#start-mining').click(function() {
        $('#status').text('التعدين جارٍ...');
        let miningInterval = setInterval(function() {
            balance += 0.1; // زيادة الرصيد بمقدار 0.1 OCT كل ثانية
            $('#balance-amount').text(balance.toFixed(2) + ' OCT');
        }, 1000);

        // بعد 10 ثواني، توقف التعدين
        setTimeout(function() {
            clearInterval(miningInterval);
            $('#status').text('التعدين متوقف. رصيدك النهائي هو: ' + balance.toFixed(2) + ' OCT');
        }, 10000);
    });
    
    // تسجيل الخروج
    $('#logout').click(function() {
        alert("تم تسجيل الخروج.");
        window.location.href = "index.html"; // العودة إلى الصفحة الرئيسية
    });
});
        miningActive = true;
        $('#status').text('التعدين جارٍ...');
        
        miningInterval = setInterval(function() {
            if (miningTimeLeft > 0) {
                miningTimeLeft--;
                balance += 0.1; // Increase balance by 0.1 OTP every second
                $('#balance-amount').text(balance.toFixed(2) + ' OTP');
                updateTimeLeft();
            } else {
                clearInterval(miningInterval);
                miningActive = false;
                $('#status').text('التعدين متوقف. رصيدك النهائي هو: ' + balance.toFixed(2) + ' OTP');
                alert('يمكنك العودة للتعدين بعد 24 ساعة!');
                miningTimeLeft = 86400; // Reset to 24 hours
                updateTimeLeft();
            }
        }, 1000); // Update every second
    });

    // Airdrop section
    $('#claim-airdrop').click(function() {
        const airdropAmount = 5.0; // Amount for airdrop
        balance += airdropAmount;
        $('#airdrop-status').text('تم الحصول على ' + airdropAmount + ' OTP من الأيردروب!');
        $('#balance-amount').text(balance.toFixed(2) + ' OTP');
    });

    // Logging out
    $('#logout').click(function() {
        alert("تم تسجيل الخروج.");
        window.location.href = "index.html"; // Return to the homepage
    });

    // Initialize time left on page load
    updateTimeLeft();
});
