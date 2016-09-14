// The "official" way to see what operating system you're running on is to use chrome.runtime.
// .getPlatformInfo(), which takes a callback because of course it does.
function DisableShelf() {
    chrome.runtime.getPlatformInfo(function(info) {
        if (info.os === "mac") {
            chrome.downloads.setShelfEnabled(false)
        }
    })
}


// Run it once (when the extension loads, presumably), then add a listener. I'm not sure why it
// works, but it certainly does.

DisableShelf()

chrome.runtime.onStartup.addListener(function() {
    DisableShelf()
})
