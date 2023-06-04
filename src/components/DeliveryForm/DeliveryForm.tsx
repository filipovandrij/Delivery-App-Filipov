import { Box, TextField, Typography } from '@mui/material';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { clearCart } from '../../store/reducers/cartSlice';
import { useAppDispatch } from '../../hooks/redux';

interface FormData {
    name: string;
    phone: string;
    address: string;
}

interface Props {
    getValid: (valid: boolean) => void;
}

const DeliveryForm: FC<Props> = ({ getValid }) => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid }
    } = useForm<FormData>();

    useEffect(() => {
        getValid(isValid);
    }, [isValid, getValid]);

    const submitData = handleSubmit((data: FormData) => {
        dispatch(clearCart());
        reset();
    });

    return (
        <Box
            height={'75vh'}
            sx={{
                border: '1.5px solid gray',
                borderRadius: '10px',
                p: '0 10px'
            }}
        >
            <form onSubmit={submitData} id='delivery-form'>
                <Box m={'40px'}>
                    <TextField
                        sx={{ width: '100%' }}
                        id='outlined-basic'
                        label='name'
                        variant='outlined'
                        {...register('name', {
                            required: 'Field is required'
                        })}
                    />
                    <Typography component={'div'}>
                        {errors.name && (
                            <Typography color={'red'}>
                                {errors.name.message || 'Error'}
                            </Typography>
                        )}
                    </Typography>
                </Box>
                <Box m={'40px'}>
                    <TextField
                        sx={{ width: '100%' }}
                        id='outlined-basic'
                        label='phone'
                        variant='outlined'
                        {...register('phone', {
                            required: 'Field is required'
                        })}
                    />
                    <Typography component={'div'}>
                        {errors.phone && (
                            <Typography color={'red'}>
                                {errors.phone.message || 'Error'}
                            </Typography>
                        )}
                    </Typography>
                </Box>
                <Box m={'40px'}>
                    <TextField
                        sx={{ width: '100%' }}
                        id='outlined-basic'
                        label='Address'
                        variant='outlined'
                        {...register('address', {
                            required: 'Field is required'
                        })}
                    />
                    <Typography component={'div'}>
                        {errors.address && (
                            <Typography color={'red'}>
                                {errors.address.message || 'Error'}
                            </Typography>
                        )}
                    </Typography>
                </Box>
            </form>
        </Box>
    );
};

export default DeliveryForm;
