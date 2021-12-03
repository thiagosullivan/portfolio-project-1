import BannerProject from '../../../components/BannerProject';
import Header from '../../../components/Header';
import { ProjetoPage } from '../../../styles/ProjetoPage';

export default function Projeto() {
  return (
    <ProjetoPage>
      <Header />
      <BannerProject
        title="Projeto 01"
        type="Website"
        imgUrl="https://www.ayrtonsenna.com.br/wp-content/uploads/2016/12/brasil-90.jpg"
      />

      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sunt earum error? Ratione, voluptas quis. Quidem rem excepturi, maiores consectetur ipsum omnis ipsam doloremque dolore animi autem! Dolores et repudiandae aspernatur perferendis eaque? Quia molestiae quam perferendis repellat odit aspernatur dolorem facere iure repudiandae esse cumque, unde, consequatur earum tenetur quaerat quidem in. Quo numquam ratione repudiandae debitis unde a nostrum dolores enim non tempore repellendus iure illo maxime, ut libero aperiam quidem nihil deleniti consequuntur magni delectus alias voluptate?
        </p>
        <button type="button">
          <a href="">Ver projeto online</a>
        </button>
      </main>
    </ProjetoPage>
  )
}