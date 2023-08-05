import * as React from 'react';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Label from 'src/components/Label';
import { varFade } from 'src/components/animate/variants';
import { m } from 'framer-motion';
import { MotionContainer, TextAnimate } from 'src/components/animate';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import FormProvider from 'src/components/hook-form/FormProvider';
import { RHFEditor, RHFTextField, RHFUploadSingleFile } from 'src/components/hook-form';
import Page from 'src/components/Page';
import { Container, TextField } from '@mui/material';
import useSettings from 'src/hooks/useSettings';
import { DatePicker } from '@mui/lab';
import Webcam from 'react-webcam';
import { useState, useRef, useCallback } from 'react';
import DocumentIdentityService from 'src/services/Api/DocumentIdentityService';
const steps = [
  {
    label: 'Dados Básicos',
    description: 'Para iniciarmos a validação de sua identidade preencha as informações a seguir.',
  },
  {
    label: 'Anexar Documento Frente',
    description: `Adicionar anexo da frente do documento`,
  },
  {
    label: 'Anexar Documento Verso',
    description: `Adicionar anexo do verso do documento`,
  },
  {
    label: 'Verificação Facial',
    description: `Sua opinião é fundamental para nós, pois nos ajuda a identificar possíveis problemas e garantir a satisfação dos nossos clientes. Por favor, compartilhe conosco o motivo da sua devolução em até 300 caracteres.`,
  },
];
export type NewPostFormValues = {
  birthDate: Date | null;
  firstName: string;
  lastName: string;
  document: string;
};
export default function RGForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { enqueueSnackbar } = useSnackbar();
  const { themeStretch } = useSettings();
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [captureImageConfirmed, setCaptureImageConfirmed] = useState<boolean>(false);
  const [frontFile, setFrontFile] = useState<File | null>(null);
  const [backFile, setBackFile] = useState<File | null>(null);
  const [capturedFile, setCapturedFile] = useState<File | null>(null);

  const webcamRef = useRef<Webcam>(null);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const newFeedbackSchema = Yup.object().shape({
    content: Yup.string()
      .min(20, 'Seu feedback deve conter pelo menos 20 caracteres.')
      .max(300, 'Seu feedback pode conter até 300 caracteres.')
      .required('Content is required'),
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    documentNumber: '',
    birthDate: null,
  };

  const methods = useForm<NewPostFormValues>({
    resolver: yupResolver(newFeedbackSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const onSubmit = () => {
    try {
      const documentIdentityService = new DocumentIdentityService(false);
      documentIdentityService.postDocumentIdentity({
        firstName: watch('firstName'),
        birthDate: watch('birthDate'),
        lastName: watch('lastName'),
        document: watch('document'),
        frontFile,
        backFile,
        capturedFile
      });
      // enqueueSnackbar('Feedback enviado com successo!');
      handleNext();
    } catch (error) {
      console.error(error);
    }
  };

  const handleBirthDateChange = (date: Date | null) => {
    setValue('birthDate', date);
  };

  const captureFaceImage = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      fetch(imageSrc)
        .then((res) => res.blob())
        .then((blob) => {
          const faceImageFile = new File([blob], 'publicface-image.png', { type: 'image/png' });
          setCapturedImage(URL.createObjectURL(faceImageFile));
          setCapturedFile(faceImageFile);
        });
    }
  };

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setFrontFile(file);
      }
    },
    [setValue]
  );

  const handleDropBack = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setBackFile(file);
      }
    },
    [setValue]
  );

  const ButtonsCta = (index: number, description: string) => {
    switch (index) {
      case 0:
        return (
          <>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Typography variant="body2">{description}</Typography>
              <Stack spacing={2} sx={{ pt: 1 }}>
                <RHFTextField name="firstName" label="Nome" />
                <RHFTextField name="lastName" label="Sobrenome" />
                <RHFTextField name="document" label="Nº R.G" />
                <DatePicker
                  views={['year', 'month', 'day']}
                  label="Dt. de Nascimento"
                  minDate={new Date('1900-01-01')}
                  maxDate={new Date()}
                  value={watch('birthDate')}
                  onChange={handleBirthDateChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      helperText={null}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  )}
                  inputFormat={'dd/MM/yyyy'}
                  mask="__/__/____"
                />
              </Stack>

              <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                Voltar
              </Button>
              <Button
                variant="contained"
                type="submit"
                sx={{ mt: 1, mr: 1 }}
                onClick={() => handleNext()}
              >
                {`Anexar Documento`}
              </Button>
            </FormProvider>
          </>
        );
      case 1:
        return (
          <Stack sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="body2">{description}</Typography>

            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <RHFUploadSingleFile
                name="frontSingleFile"
                maxSize={3145728}
                onDrop={handleDrop}
                helperText={
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 2,
                      mx: 'auto',
                      display: 'block',
                      textAlign: 'center',
                      color: 'text.secondary',
                    }}
                  >
                    Formatos Possiveís *.jpg, *.png,
                  </Typography>
                }
              />
            </FormProvider>
            <Button variant="text" onClick={() => handleBack()}>
              Voltar
            </Button>
            <Button variant="contained" onClick={() => handleNext()}>
              Anexar Verso
            </Button>
          </Stack>
        );
      case 2:
        return (
          <Stack sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="body2">{description}</Typography>

            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <RHFUploadSingleFile
                name="backSingleFile"
                maxSize={3145728}
                onDrop={handleDropBack}
                helperText={
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 2,
                      mx: 'auto',
                      display: 'block',
                      textAlign: 'center',
                      color: 'text.secondary',
                    }}
                  >
                    Formatos Possiveís *.jpg, *.png,
                  </Typography>
                }
              />
            </FormProvider>
            <Button variant="text" onClick={() => handleBack()}>
              Voltar
            </Button>
            <Button variant="contained" onClick={() => handleNext()}>
              Confirmar Identididade
            </Button>
          </Stack>
        );
      case 3:
        return (
          <>
            {capturedImage ? (
              <>
                <img src={capturedImage} alt="Captured face" style={{ width: 400, height: 400 }} />
                <Stack sx={{ pt: 1 }}>
                  <Button variant="text" onClick={() => handleBack()}>
                    Voltar
                  </Button>
                  {!captureImageConfirmed ? (
                    <Button variant="outlined" onClick={() => setCaptureImageConfirmed(true)}>
                      Confirmar Foto
                    </Button>
                  ) : (
                    <Button variant="contained" onClick={() => onSubmit()}>
                      Enviar Documentos e Foto
                    </Button>
                  )}
                </Stack>
              </>
            ) : (
              <>
                <Webcam width={400} height={400} audio={false} ref={webcamRef} mirrored={true} />
                <Stack>
                  <Button variant="text" onClick={() => handleBack()}>
                    Voltar
                  </Button>
                  <Button variant="contained" onClick={captureFaceImage}>
                    Tirar Foto
                  </Button>
                </Stack>
              </>
            )}
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <Page title="Formulario RG">
      <Container
        maxWidth={themeStretch ? false : 'lg'}
        sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', p: 3 }}
      >
        <Box sx={{ maxWidth: 600 }}>
          <Stack sx={{ px: 4 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 3 ? <Typography variant="caption">Ultima etapa</Typography> : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Box sx={{ mb: 2 }}>{ButtonsCta(index, step.description)}</Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper sx={{ p: 3 }}>
                <MotionContainer>
                  <m.div variants={varFade().inRight}>
                    <Typography variant="subtitle1">{`Informações enviadas!`}</Typography>
                  </m.div>
                  <m.div variants={varFade().inRight}>
                    <Typography variant="subtitle2">{`seus documentos e sua foto foi enviada para nossa central.`}</Typography>
                  </m.div>
                  <m.div variants={varFade().inDown}>
                    <Stack sx={{ pt: 1 }}>
                      <Typography variant="h6">
                        {`Status:`} <Label variant="ghost">{`Em analiste pelo suporte!`}</Label>
                      </Typography>
                    </Stack>
                  </m.div>
                </MotionContainer>
              </Paper>
            )}
          </Stack>
        </Box>
      </Container>
    </Page>
  );
}
