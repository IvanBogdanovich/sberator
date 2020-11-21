import React from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';

// components
import Label from '../../components/Label';
import Button from '../../components/Button';

// actions
import { setGenerateDataName } from '../../state/app/actions';

// helpers
import { validateName, validateSurname } from '../../helpers/validate';

import styles from './styles.module.css';

function FormView() {
    const dispatch = useDispatch();

    function dispatchGeneratedName(values) {
        return dispatch(setGenerateDataName(values));
    }

    return (
        <Formik
            initialValues={{
                name: '',
                surname: '',
            }}

            onSubmit={dispatchGeneratedName}
        >

        {({ errors, touched }) => (
            <Form className={cn(styles.Root)}>
                <fieldset className={cn(styles.Fieldset)}>
                    <legend className={cn(styles.Legend)}>
                        Попробуй примерить новое имя!
                    </legend>

                    <div className={cn(styles.WrapperField)}>
                        {errors.name && touched.name &&
                        <span className={cn(styles.ValidationNotice)}>{errors.name}</span>}

                        <Label htmlFor="name">Имя</Label>

                        <Field
                            name="name"
                            id="name"
                            className={
                                cn(styles.Field,
                                (errors.name && touched.name) && styles.Field_error)
                            }
                            placeholder="Введите имя"
                            validate={validateName}
                        />
                    </div>

                    <div className={cn(styles.WrapperField)}>
                        {errors.surname && touched.surname &&
                        <span className={cn(styles.ValidationNotice)}>{errors.surname}</span>}

                        <Label htmlFor="surname">Фамилия</Label>

                        <Field
                            name="surname"
                            id="surname"
                            className={
                                cn(styles.Field,
                                (errors.surname && touched.surname) && styles.Field_error)
                            }
                            placeholder="Введите фамилию"
                            validate={validateSurname}
                        />
                    </div>
                </fieldset>

                <Button>Сгенерировать</Button>
            </Form>
        )}
        </Formik>
)};

export default FormView;
