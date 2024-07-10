import React, { useCallback, useEffect, useState } from "react"
import Modal from "@/components/global/Modal/Modal"
import { CSSTransition } from "react-transition-group"
import classes from "./CallbackForm.module.scss"
import Button from "@/components/ui/Button/Button"
import Input from "@/components/ui/Input/Input"
import { useTelegram } from "@/hooks/useTelegram"

const CallbackForm = () => {
    const [success, setSuccess] = useState<boolean>(false)
    const [formErrors, setFormErrors] = useState<{ name: boolean; phone: boolean; email: boolean }>({ name: false, phone: false, email: false })
    const { webApp } = useTelegram()

    useEffect(() => {
        if (webApp && webApp.MainButton.isVisible) {
            // @ts-ignore
            webApp.MainButton.setParams({
                text: "Отправить данные"
            })
        }
    }, [webApp?.MainButton.isVisible])

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: ""
    })

    useEffect(() => {
        if (webApp) {
            if (!formData.name || !formData.email || !formData.phone) {
                webApp.MainButton.hide()
            } else {
                webApp.MainButton.show()
            }
        }
    }, [formData.name, formData.email, formData.phone])

    const onSendData = useCallback(() => {
        const data = {
            name: formData.name,
            phone: formData.phone,
            email: formData.email
        }
        // @ts-ignore
        webApp?.sendData(JSON.stringify(data))
    }, [formData])

    useEffect(() => {
        // @ts-ignore
        webApp?.onEvent("mainButtonClicked", onSendData)
        return () => {
            // @ts-ignore
            webApp?.offEvent("mainButtonClicked", onSendData)
        }
    }, [onSendData])

    const onChange = (nameField: string, valueField: string) => {
        setFormData({ ...formData, [nameField]: valueField })
        setFormErrors({ ...formErrors, [nameField]: false })
    }

    const onSubmit = async () => {
        let errors = false

        if (formData.phone.includes("_")) {
            setFormErrors((prev) => ({ ...prev, phone: true }))
            errors = true
        }

        if (!formData.phone) {
            setFormErrors((prev) => ({ ...prev, phone: true }))
            errors = true
        }

        if (!formData.name) {
            setFormErrors((prev) => ({ ...prev, name: true }))
            errors = true
        }
        if (!formData.email) {
            setFormErrors((prev) => ({ ...prev, email: true }))
            errors = true
        }

        if (errors) {
            return false
        }

        const bodyFormData = new FormData()

        const title = document.title

        bodyFormData.append("name", formData.name)
        bodyFormData.append("phone", formData.phone)
        bodyFormData.append("email", formData.email)
        bodyFormData.append("title", title)

        console.log("Page Title:", title)
        console.log("Name Field:", formData.name)
        console.log("Phone Field:", formData.phone)
        console.log("Email Field:", formData.email)

        if (!errors) {
            setSuccess(true)
        }
    }

    return (
        <Modal>
            {!success ? (
                <div className={classes.Form}>
                    <div className={classes.Title}>ЗАКАЗАТЬ ЗВОНОК</div>
                    <Input
                        className={classes.Input}
                        isError={formErrors.name}
                        title={"Ваше имя"}
                        value={formData.name}
                        onChange={(e) => onChange("name", e.currentTarget.value)}
                        placeholder={" "}
                    />
                    <Input
                        className={classes.Input}
                        isError={formErrors.phone}
                        type={"tel"}
                        title={"Телефон"}
                        value={formData.phone}
                        onChange={(e) => onChange("phone", e.currentTarget.value)}
                        placeholder={" "}
                    />
                    <Input
                        isError={formErrors.email}
                        className={classes.Input}
                        title={"Email"}
                        value={formData.email}
                        onChange={(e) => onChange("email", e.currentTarget.value)}
                        placeholder={" "}
                    />
                    <div className={classes.Agreement}>
                        <div className={classes.Text}>
                            Нажимая на кнопку «Отправить», вы ознакомлены
                            <br /> и подтверждаете согласие с{" "}
                            <a
                                target={"_blank"}
                                href="/policy"
                            >
                                политикой обработки персональных данных
                            </a>
                        </div>
                    </div>
                    <Button
                        className={classes.Button}
                        onClick={onSubmit}
                    >
                        Отправить
                    </Button>
                </div>
            ) : null}
            <CSSTransition
                in={success}
                timeout={250}
                mountOnEnter={true}
                unmountOnExit={true}
            >
                {(state) => (
                    <div className={classes.Thanks}>
                        <div className={classes.Title}>Спасибо!</div>
                        <div className={classes.Message}>Наши менеджеры свяжутся с Вами</div>
                    </div>
                )}
            </CSSTransition>
        </Modal>
    )
}

export default CallbackForm
