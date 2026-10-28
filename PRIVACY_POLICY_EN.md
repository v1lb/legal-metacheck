---
title: "Privacy Policy"
lang: en
---

# Privacy Policy for MetaCheck

**Effective Date:** 2026-10-27
**Developer:** Puwer Studio 
**Contact:** werk9886@gmail.com

---

## 1. Overview
MetaCheck displays image metadata (EXIF, XMP, PNG text blocks, Content Credentials) and detects signs of AI generation. All core file analysis is performed locally on your device.

## 2. Data Processed Locally
*   **Images:** Images you select, capture via camera, or share with the app are processed strictly on-device. The app does not upload your images to any server or store copies of them. Camera snapshots are kept temporarily in the app's cache and are deleted automatically.
*   **Analysis Reports (History):** If the history feature is enabled, reports are stored exclusively on your device in an encrypted format. These reports may contain file metadata, including GPS coordinates. You can disable or clear this history at any time in the app's settings.
*   **Settings and API Keys:** Your settings and API keys are stored locally. API keys are encrypted using the Android Keystore system.

## 3. Data Transmission and Third-Party Services
By default, the app does not transmit any data. Data sharing only occurs based on your explicit actions:

*   **OpenStreetMap:** If an image contains GPS coordinates, the map is initially disabled. Once you click "Show Map (Request OpenStreetMap)", the app downloads map tiles from OpenStreetMap servers via HTTPS. Tiles are requested by ID numbers, meaning OpenStreetMap servers can infer the approximate area being viewed, and will see your IP address and the app's user-agent. Your actual image and its metadata are never sent to OpenStreetMap. Downloaded tiles are cached locally and deleted when you clear the app cache or uninstall the app. For more information, see the OpenStreetMap Foundation Privacy Policy: https://osmfoundation.org
*   **Address Search:** If you use the "Find on Map" feature, the entered text is processed by your device's system geocoder (on most Android devices, this is handled by Google Services). The app does not collect, store, or transmit this search query.
*   **API Verification:** If you explicitly enable API verification in the settings, provide a server URL, and click "Verify via API", a JSON report will be sent to that specific address. The report contains data fields only—it does not include the image itself, and GPS coordinates are excluded unless you specifically enable them. This data is handled by the server endpoint of your choice; the developer of MetaCheck does not receive this data.

## 4. In-App Purchases
The premium Pro version is processed through Google Play. All billing and payment details are handled securely by Google. The app only receives confirmation of the successful purchase. If you manually enter a license key, it is stored on your device in an encrypted format.

## 5. What the App Does Not Do
MetaCheck does not require user accounts. It contains **no advertisements, no user analytics tracking, and no third-party SDKs** designed for data collection.

## 6. Device Permissions Required
*   **Internet Access:** Used exclusively to download OpenStreetMap tiles upon your request or to send reports to a user-defined API endpoint.
*   **Access Media Location (ACCESS_MEDIA_LOCATION):** Required to read geographic coordinates embedded within your photos. This data is processed strictly on your device.
*   *Note:* The app does not request direct access to your photos or camera. Files are chosen and saved via system-provided file pickers, and photos are captured using your device's system camera application.

## 7. Data Retention and Deletion
You can clear your history within the app settings. Since all data is stored locally, completely uninstalling the app will automatically delete all stored configuration data, cached files, and history.

## 8. Children's Privacy
MetaCheck is not intended to collect data from children, and it does not actively collect any personally identifiable information.

## 9. Changes to This Privacy Policy
We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.