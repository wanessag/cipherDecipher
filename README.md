Coletar a mensagem {
  * Peça ao usuário a mensagem a criptografar
  * Se o conteúdo da mensagem for vazio --> alerte o usuário que a mensagem não pode ser vazia
  * Avalie cada caractere da mensagem {
    * Verifique se o caractere é um número {
    * Alerte o usuário que a mensagem não pode conter números
    * Transforme a mensagem num conteúdo vazio
    * Aborte o loop, pois um número foi encontrado
    }
  }
} Enquanto a mensagem for vazia, volte ao início

Criptografar a mensagem {
  * Crie uma string vazia para guardar a mensagem criptografada
  * Avalie cada caractere da mensagem {
    * Verifique se o caractere é maiúsculo {
    * Adicione à mensagem criptografada o caractere maiúsculo alterado pela cifra 33 "passos" à direita
  } * Se o caractere não é maiúsculo {
    * Adicione à mensagem criptografada o caractere minúsculo alterado pela cifra 33 "passos" à direita
   }
  }
  Mostre ao usuário a mensagem criptografada
}

Descriptografar a mensagem {
  * Crie uma string vazia para guardar a mensagem criptografada
  * Avalie cada caractere da mensagem {
    * Verifique se o caractere é maiúsculo {
    * Adicione à mensagem criptografada o caractere maiúsculo alterado pela cifra 33 "passos" à esquerda para desfazer os 33 "passos" à direita
  } * Se o caractere não é maiúsculo {
      * Adicione à mensagem criptografada o caractere minúsculo alterado pela cifra 33 "passos" à esquerda para desfazer os 33 "passos" à direita
  }
 }
  Mostre ao usuário a mensagem descriptografada
}
