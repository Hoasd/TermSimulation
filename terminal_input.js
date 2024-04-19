const textToShow = '$ curl <span class="text-white">https://app.mailpace.com/api/v1/send</span>\n -H MailPace-Server-Token: a3c4-efg6 \n -d {\n    from: awesome@developer.com,\n    to: important@users.com,\n    subject: Woah, MailPace Rocks!\n} \n\n`<span class="text-gray-500">Sending...</span>`\n^250<span class="text-green-200">✓ Email Sent!</span>';

const typed = new Typed("#terminal-output", {
  strings: [textToShow],
  typeSpeed: 20,
  loop: false,
  cursorChar: "_",
});