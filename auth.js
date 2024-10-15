$(document).ready(function() {
    // تسجيل الحساب الجديد
    $('#register-form').submit(function(event) {
        event.preventDefault(); // منع إرسال النموذج

        const username = $('#username').val();
        const password = $('#password').val();

        // هنا يمكنك إضافة كود لحفظ بيانات المستخدم في قاعدة بيانات
        $('#register-status').text('تم تسجيل الحساب بنجاح!');

        // إعادة تعيين الحقول
        $('#username').val('');
        $('#password').val('');
    });

    // تسجيل الدخول
    $('#login-form').submit(function(event) {
        event.preventDefault(); // منع إرسال النموذج

        const username = $('#login-username').val();
        const password = $('#login-password').val();

        // هنا يمكنك إضافة كود للتحقق من بيانات المستخدم
        $('#login-status').text('تم تسجيل الدخول بنجاح!').fadeOut(2000, function() {
            window.location.href = 'dashboard.html'; // الانتقال إلى لوحة التحكم
        });

        // إعادة تعيين الحقول
        $('#login-username').val('');
        $('#login-password').val('');
    });
});