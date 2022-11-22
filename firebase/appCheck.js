import React, { useEffect, createRef } from 'react'
import {
    initializeAppCheck,
    ReCaptchaEnterpriseProvider,
} from 'firebase/app-check'
import { app } from './config' // our already initialized firebse-app

export const appCheckRef = createRef()
const useAppCheck = () => {
    useEffect(() => {
        if (appCheckRef.current) {
            return
        }
        const appCheck = initializeAppCheck(app, {
            provider: new ReCaptchaEnterpriseProvider(
                '6LfaOigjAAAAAF1w5llFfkV7eSgNcVsEIl3WTsLm' /* reCAPTCHA Enterprise site key */
            ),
            isTokenAutoRefreshEnabled: true, // Set to true to allow auto-refresh.
        })
        appCheckRef.current = appCheck
    }, [])
}
export default useAppCheck
