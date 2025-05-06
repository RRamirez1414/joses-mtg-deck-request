import { RequestBodyArgs } from '../build-request'

export const generateDeckRequestHtml = ({
  firstName,
  lastName,
  email,
  description,
  cardName,
  cardImageUrls,
}: RequestBodyArgs) => `
<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
 <meta charset="UTF-8" />
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 <!--[if !mso]><!-- -->
 <meta http-equiv="X-UA-Compatible" content="IE=edge" />
 <!--<![endif]-->
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <meta name="format-detection" content="telephone=no, date=no, address=no, email=no" />
 <meta name="x-apple-disable-message-reformatting" />
 <link href="https://fonts.googleapis.com/css?family=Fira+Sans:ital,wght@0,400;0,400;0,700;0,800" rel="stylesheet" />
 <title>Untitled</title>
 <!-- Made with Postcards Email Builder by Designmodo -->
 <!--[if !mso]><!-- -->
 <style>
 @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 400; src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2'); unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F; }
         @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 400; src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2'); unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; }
         @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 400; src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2'); unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }
         @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 400; src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }
                                 @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 700; src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eSxf6Xl7Gl3LX.woff2) format('woff2'); unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F; }
         @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 700; src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eQhf6Xl7Gl3LX.woff2) format('woff2'); unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; }
         @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 700; src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eSBf6Xl7Gl3LX.woff2) format('woff2'); unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }
         @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 700; src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eRhf6Xl7Glw.woff2) format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }
                         @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 800; font-display: swap; src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eSxf6Xl7Gl3LX.woff2) format('woff2'); unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F; }
         @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 800; font-display: swap; src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eQhf6Xl7Gl3LX.woff2) format('woff2'); unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; }
         @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 800; font-display: swap; src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eSBf6Xl7Gl3LX.woff2) format('woff2'); unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF; }
         @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 800; font-display: swap; src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eRhf6Xl7Glw.woff2) format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }
 </style>
 <!--<![endif]-->
 <style>
 html, body { margin: 0 !important; padding: 0 !important; min-height: 100% !important; width: 100% !important; -webkit-font-smoothing: antialiased; }
         * { -ms-text-size-adjust: 100%; }
         #outlook a { padding: 0; }
         .ReadMsgBody, .ExternalClass { width: 100%; }
         .ExternalClass, .ExternalClass p, .ExternalClass td, .ExternalClass div, .ExternalClass span, .ExternalClass font { line-height: 100%; }
         table, td, th { mso-table-lspace: 0 !important; mso-table-rspace: 0 !important; border-collapse: collapse; }
         u + .body table, u + .body td, u + .body th { will-change: transform; }
         body, td, th, p, div, li, a, span { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; }
         img { border: 0; outline: 0; line-height: 100%; text-decoration: none; -ms-interpolation-mode: bicubic; }
         a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; }
         .body .pc-project-body { background-color: transparent !important; }
                 
 
         @media (min-width: 621px) {
             .pc-lg-hide {  display: none; } 
             .pc-lg-bg-img-hide { background-image: none !important; }
         }
 </style>
 <style>
 @media (max-width: 620px) {
 .pc-project-body {min-width: 0px !important;}
 .pc-project-container {width: 100% !important;}
 .pc-sm-hide, .pc-w620-gridCollapsed-1 > tbody > tr > .pc-sm-hide {display: none !important;}
 .pc-sm-bg-img-hide {background-image: none !important;}
 .pc-w620-itemsSpacings-0-30 {padding-left: 0px !important;padding-right: 0px !important;padding-top: 15px !important;padding-bottom: 15px !important;}
 .pc-w620-padding-35-35-35-35 {padding: 35px 35px 35px 35px !important;}
 
 .pc-w620-gridCollapsed-1 > tbody,.pc-w620-gridCollapsed-1 > tbody > tr,.pc-w620-gridCollapsed-1 > tr {display: inline-block !important;}
 .pc-w620-gridCollapsed-1.pc-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-width-fill > tr {width: 100% !important;}
 .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
 .pc-w620-gridCollapsed-1 > tbody > tr > td,.pc-w620-gridCollapsed-1 > tr > td {display: block !important;width: auto !important;padding-left: 0 !important;padding-right: 0 !important;margin-left: 0 !important;}
 .pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-width-fill > tr > td {width: 100% !important;}
 .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;}
 .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-first > .pc-grid-td-first,.pc-w620-gridCollapsed-1 > .pc-grid-tr-first > .pc-grid-td-first {padding-top: 0 !important;}
 .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-last > .pc-grid-td-last,.pc-w620-gridCollapsed-1 > .pc-grid-tr-last > .pc-grid-td-last {padding-bottom: 0 !important;}
 
 .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-first > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-first > td {padding-top: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-last > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-last > td {padding-bottom: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-first,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-first {padding-left: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-last,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-last {padding-right: 0 !important;}
 
 .pc-w620-tableCollapsed-1 > tbody,.pc-w620-tableCollapsed-1 > tbody > tr,.pc-w620-tableCollapsed-1 > tr {display: block !important;}
 .pc-w620-tableCollapsed-1.pc-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-width-fill > tr {width: 100% !important;}
 .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
 .pc-w620-tableCollapsed-1 > tbody > tr > td,.pc-w620-tableCollapsed-1 > tr > td {display: block !important;width: auto !important;}
 .pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
 .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
 }
 @media (max-width: 520px) {
 .pc-w520-padding-30-30-30-30 {padding: 30px 30px 30px 30px !important;}
 }
 </style>
 <!--[if !mso]><!-- -->
 <style>
 @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 400; src: url('https://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VvmYjN.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VvmYjL.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 800; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnMK7eSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnMK7eSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 700; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnLK3eSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnLK3eSBf6.woff2') format('woff2'); }
 </style>
 <!--<![endif]-->
 <!--[if mso]>
    <style type="text/css">
        .pc-font-alt {
            font-family: Arial, Helvetica, sans-serif !important;
        }
    </style>
    <![endif]-->
 <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
</head>

<body class="body pc-font-alt" style="width: 100% !important; min-height: 100% !important; margin: 0 !important; padding: 0 !important; font-weight: normal; color: #2D3A41; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-variant-ligatures: normal; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; background-color: #f4f4f4;" bgcolor="#f4f4f4">
 <table class="pc-project-body" style="table-layout: fixed; width: 100%; min-width: 600px; background-color: #f4f4f4;" bgcolor="#f4f4f4" border="0" cellspacing="0" cellpadding="0" role="presentation">
  <tr>
   <td align="center" valign="top" style="width:auto;">
    <table class="pc-project-container" align="center" style="width: 600px; max-width: 600px;" border="0" cellpadding="0" cellspacing="0" role="presentation">
     <tr>
      <td style="padding: 20px 0px 20px 0px;" align="left" valign="top">
       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Transactional 12 -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td valign="top" class="pc-w520-padding-30-30-30-30 pc-w620-padding-35-35-35-35" style="padding: 40px 40px 40px 40px; height: unset; background-color: #ffffff;" bgcolor="#ffffff">
             <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
               <td align="left" valign="top" style="padding: 0px 0px 15px 0px; height: auto;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                 <tr>
                  <td valign="top" align="left">
                   <div class="pc-font-alt" style="text-decoration: none;">
                    <div style="font-size: 36px;mso-line-height-alt:46.08px;line-height: 46.08px;text-align:left;text-align-last:left;color:#151515;letter-spacing:-0.6px;font-weight:800;font-style:normal;">
                     <div><span style="font-family: 'Fira Sans', Arial, Helvetica, sans-serif;line-height: 128%;">Deck Request Confirmation</span>
                     </div>
                    </div>
                   </div>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
             <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
               <td align="left" valign="top" style="padding: 0px 0px 30px 0px; height: auto;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                 <tr>
                  <td valign="top" align="left">
                   <div class="pc-font-alt" style="text-decoration: none;">
                    <div style="font-size: 20px;mso-line-height-alt:30px;line-height: 30px;text-align:left;text-align-last:left;color:#9b9b9b;font-style:normal;font-weight:400;letter-spacing:-0.4px;">
                     <div><span style="font-family: 'Fira Sans', Arial, Helvetica, sans-serif;line-height: 150%;">Thank you for your request! NotJustNerdyTv will contact you to begin the deck-building process.</span>
                     </div>
                    </div>
                   </div>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
             <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
               <td align="center" valign="top" style="padding: 0px 48px 30px 0px; height: auto;">
                <img src="https://cloudfilesdm.com/postcards/image-1746063157550.png" width="113" height="auto" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 24%; height: auto; border: 0;" />
               </td>
              </tr>
             </table>
             <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
               <td style="padding: 0px 0px 40px 0px;">
                <table class="pc-width-fill pc-w620-gridCollapsed-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr class="pc-grid-tr-first">
                  <td class="pc-grid-td-first pc-w620-itemsSpacings-0-30" align="left" valign="top" style="width: 50%; padding-top: 0px; padding-right: 20px; padding-bottom: 20px; padding-left: 0px;">
                   <table style="width: 100%;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                     <td align="left" valign="top">
                      <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <td align="left" valign="top">
                         <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td valign="top" style="padding: 0px 0px 10px 0px; height: auto;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                             <tr>
                              <td valign="top" align="left">
                               <div class="pc-font-alt" style="text-decoration: none;">
                                <div style="font-size: 18px;mso-line-height-alt:28.08px;line-height: 28.08px;text-align:left;text-align-last:left;color:#151515;letter-spacing:-0.2px;font-weight:700;font-style:normal;">
                                 <div><span style="font-family: 'Fira Sans', Arial, Helvetica, sans-serif;line-height: 156%;">Name </span>
                                 </div>
                                </div>
                               </div>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                       <tr>
                        <td align="left" valign="top">
                         <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td valign="top" style="padding: 0px 0px 10px 0px;">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="margin-right: auto;">
                             <tr>
                              <td valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 1px solid #e5e5e5;">&nbsp;</td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                       <tr>
                        <td align="left" valign="top">
                         <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left">
                          <tr>
                           <td valign="top" align="left">
                            <div class="pc-font-alt" style="text-decoration: none;">
                             <div style="font-size: 18px;mso-line-height-alt:28.08px;line-height: 28.08px;text-align:left;text-align-last:left;color:#151515;letter-spacing:-0.2px;font-weight:400;font-style:normal;">
                              <div><span style="font-family: 'Fira Sans', Arial, Helvetica, sans-serif;line-height: 156%;">${firstName} ${lastName}</span>
                              </div>
                             </div>
                            </div>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                  <td class="pc-grid-td-last pc-w620-itemsSpacings-0-30" align="left" valign="top" style="width: 50%; padding-top: 0px; padding-right: 0px; padding-bottom: 20px; padding-left: 20px;">
                   <table style="width: 100%;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                     <td align="left" valign="top">
                      <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <td align="left" valign="top">
                         <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td valign="top" style="padding: 0px 0px 10px 0px; height: auto;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                             <tr>
                              <td valign="top" align="left">
                               <div class="pc-font-alt" style="text-decoration: none;">
                                <div style="font-size: 18px;mso-line-height-alt:28.08px;line-height: 28.08px;text-align:left;text-align-last:left;color:#151515;letter-spacing:-0.2px;font-weight:700;font-style:normal;">
                                 <div><span style="font-family: 'Fira Sans', Arial, Helvetica, sans-serif;line-height: 156%;">Contact Email</span>
                                 </div>
                                </div>
                               </div>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                       <tr>
                        <td align="left" valign="top">
                         <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td valign="top" style="padding: 0px 0px 10px 0px;">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="margin-right: auto;">
                             <tr>
                              <td valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 1px solid #e5e5e5;">&nbsp;</td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                       <tr>
                        <td align="left" valign="top">
                         <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left">
                          <tr>
                           <td valign="top" align="left">
                            <div class="pc-font-alt" style="text-decoration: none;">
                             <div style="font-size: 18px;mso-line-height-alt:28.08px;line-height: 28.08px;text-align:left;text-align-last:left;color:#151515;letter-spacing:-0.2px;font-weight:400;font-style:normal;">
                              <div><span style="font-family: 'Fira Sans', Arial, Helvetica, sans-serif;line-height: 156%;">${email}</span>
                              </div>
                             </div>
                            </div>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                 <tr class="pc-grid-tr-last">
                  <td class="pc-grid-td-first pc-grid-td-last pc-w620-itemsSpacings-0-30" align="left" valign="top" style="width: 50%; padding-top: 20px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">
                   <table style="width: 100%;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                     <td align="left" valign="top">
                      <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <td align="left" valign="top">
                         <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td valign="top" style="padding: 0px 0px 10px 0px; height: auto;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                             <tr>
                              <td valign="top" align="left">
                               <div class="pc-font-alt" style="text-decoration: none;">
                                <div style="font-size: 18px;mso-line-height-alt:28.08px;line-height: 28.08px;text-align:left;text-align-last:left;color:#151515;letter-spacing:-0.2px;font-weight:700;font-style:normal;">
                                 <div><span style="font-family: 'Fira Sans', Arial, Helvetica, sans-serif;line-height: 156%;">Card Name</span>
                                 </div>
                                </div>
                               </div>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                       <tr>
                        <td align="left" valign="top">
                         <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td valign="top" style="padding: 0px 0px 10px 0px;">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="margin-right: auto;">
                             <tr>
                              <td valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 1px solid #e5e5e5;">&nbsp;</td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                       <tr>
                        <td align="left" valign="top">
                         <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left">
                          <tr>
                           <td valign="top" align="left">
                            <div class="pc-font-alt" style="text-decoration: none;">
                             <div style="font-size: 18px;mso-line-height-alt:28.08px;line-height: 28.08px;text-align:left;text-align-last:left;color:#151515;letter-spacing:-0.2px;font-weight:400;font-style:normal;">
                              <div><span style="font-family: 'Fira Sans', Arial, Helvetica, sans-serif;line-height: 156%;">${cardName}</span>
                              </div>
                             </div>
                            </div>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
             <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
               <td style="padding: 0px 0px 36px 0px;">
                <table class="pc-width-fill pc-w620-gridCollapsed-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr class="pc-grid-tr-first pc-grid-tr-last">
                  <td class="pc-grid-td-first pc-grid-td-last pc-w620-itemsSpacings-0-30" align="left" valign="top" style="width: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">
                   <table style="width: 100%;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                     <td align="left" valign="top">
                      <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <td align="left" valign="top">
                         <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td valign="top" style="padding: 0px 0px 10px 0px; height: auto;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                             <tr>
                              <td valign="top" align="left">
                               <div class="pc-font-alt" style="text-decoration: none;">
                                <div style="font-size: 18px;mso-line-height-alt:28.08px;line-height: 28.08px;text-align:left;text-align-last:left;color:#151515;letter-spacing:-0.2px;font-weight:700;font-style:normal;">
                                 <div><span style="font-family: 'Fira Sans', Arial, Helvetica, sans-serif;line-height: 156%;">Deck Description</span>
                                 </div>
                                </div>
                               </div>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                       <tr>
                        <td align="left" valign="top">
                         <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td valign="top" style="padding: 0px 0px 10px 0px;">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="margin-right: auto;">
                             <tr>
                              <td valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 1px solid #e5e5e5;">&nbsp;</td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                       <tr>
                        <td align="left" valign="top">
                         <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left">
                          <tr>
                           <td valign="top" align="left">
                            <div class="pc-font-alt" style="text-decoration: none;">
                             <div style="font-size: 18px;mso-line-height-alt:28.08px;line-height: 28.08px;text-align:left;text-align-last:left;color:#151515;letter-spacing:-0.2px;font-weight:400;font-style:normal;">
                              <div><span style="font-family: 'Fira Sans', Arial, Helvetica, sans-serif;line-height: 156%;">${description}</span>
                              </div>
                             </div>
                            </div>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
             <table class="pc-width-fill pc-w620-gridCollapsed-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
              <tr class="pc-grid-tr-first pc-grid-tr-last">
               <td class="pc-grid-td-first pc-grid-td-last pc-w620-itemsSpacings-0-30" align="left" valign="top" style="width: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">
                <table style="width: 100%;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="left" valign="top">
                   <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                     <td align="left" valign="top">
                      <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <td valign="top" style="padding: 0px 0px 10px 0px; height: auto;">
                         <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                          <tr>
                           <td valign="top" align="left">
                            <div class="pc-font-alt" style="text-decoration: none;">
                             <div style="font-size: 18px;mso-line-height-alt:28.08px;line-height: 28.08px;text-align:left;text-align-last:left;color:#151515;letter-spacing:-0.2px;font-weight:700;font-style:normal;">
                              <div><span style="font-family: 'Fira Sans', Arial, Helvetica, sans-serif;line-height: 156%;">Card Image(s)</span>
                              </div>
                             </div>
                            </div>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                    <tr>
                     <td align="left" valign="top">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <td valign="top" style="padding: 0px 0px 10px 0px;">
                         <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="margin-right: auto;">
                          <tr>
                           <td valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 1px solid #e5e5e5;">&nbsp;</td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                    <tr>
                     <td align="left" valign="top">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left">
                       <tr>
                        <td valign="top" align="left">
                         <div class="pc-font-alt" style="text-decoration: none;">
                          <div style="font-size: 18px;mso-line-height-alt:28.08px;line-height: 28.08px;text-align:left;text-align-last:left;color:#151515;letter-spacing:-0.2px;font-weight:400;font-style:normal;">
                           <div>
                            ${cardImageUrls?.map((image) => {
                              return `<a href="${image}" style="text-decoration: none; color: #151515; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; line-height: 156%;"><img src="${image}" alt="Card Image" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 100%; height: auto; border: 0;" /></a>`
                            })}
                           </div>
                          </div>
                         </div>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Transactional 12 -->
         </td>
        </tr>
       </table>
      </td>
     </tr>
    </table>
   </td>
  </tr>
 </table>
</body>
</html>
`
