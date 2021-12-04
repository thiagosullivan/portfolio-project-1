import { useState } from 'react';
import toast from 'react-hot-toast';
import { sendContactMail } from '../../services/sendMail';
import theme from '../../styles/theme';
import LoadingComponent from '../LoadingComponent';
import Loadingscreen from '../LoadingScreen';
import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleSubmit(event){
    event.preventDefault();

    if(!name || !email || !message) {
      toast("Preencha todos os campos para enviar sua mensagem!", {
        style: {
          background: theme.error,
          color: '#ffffff'
        }
      });
      return;
    }

    try {
      setLoading(true);
      await sendContactMail(name, email, message);
      setName('');
      setEmail('');
      setMessage('');

      toast("Mensagem enviada com sucesso!", {
        style:{
          background: theme.secondary,
          color: '#ffffff'
        }
      });      
    } catch (error) {
      toast("Ocorreu um erro ao tentar enviar sua mensagem. Tente Novamente!", {
        style:{
          background: theme.error,
          color: '#ffffff'
        }
      })
    } finally {      
      setLoading(false)
    }
  }

  return (
    <FormContainer data-aos="zoom-in" onSubmit={handleSubmit}>
        { loading ? <LoadingComponent /> : ''}
        <Input
          placeholder="Nome"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <Input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <TextArea
          placeholder="Mensagem"
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        />
        <button type="submit">Enviar</button>
      </FormContainer>
  )
}