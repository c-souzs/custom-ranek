import { MagnifyingGlass, X } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Form/Input';
import TitlePackage from '../../components/TitlePackage';
import useInput from '../../hooks/useInput';

import * as C from './styles';

const Products = (): JSX.Element => {
  const search = useInput('');
  return (
    <C.Products>
      <TitlePackage subtitle="Explore nossos produtos" title="nossos produtos" />
      <C.Search>
        <div className="container">
          <C.FormSearch>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Input placeholder="Smartphone" name="search" style={{ marginTop: '0' }} {...search} />
            <C.ButtonsSearch>
              <C.ButtonSearch>
                <MagnifyingGlass size={24} color="#8877ff" />
              </C.ButtonSearch>
              <C.ButtonSearch>
                <X size={24} color="#8877ff" />
              </C.ButtonSearch>
            </C.ButtonsSearch>
          </C.FormSearch>
        </div>
      </C.Search>
      <C.List>
        <C.LiProduct>
          <Link to="/product/notebook-3">
            <C.ImageProduct src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook-2.jpg" />
            <C.NameProduct className="font-2-xl">Notebook</C.NameProduct>
            <C.PriceProduct className="font-2-m">R$ 299,00</C.PriceProduct>
            <C.DescriptionProduct className="font-2-s">
              Notebook usado - 4gb de RAM - processador 4.123
            </C.DescriptionProduct>
          </Link>
        </C.LiProduct>
        <C.LiProduct>
          <Link to="/product/notebook-3">
            <C.ImageProduct src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook-2.jpg" />
            <C.NameProduct className="font-2-xl">Notebook</C.NameProduct>
            <C.PriceProduct className="font-2-m">R$ 299,00</C.PriceProduct>
            <C.DescriptionProduct className="font-2-s">
              Notebook usado - 4gb de RAM - processador 4.123
            </C.DescriptionProduct>
          </Link>
        </C.LiProduct>
        <C.LiProduct>
          <Link to="/product/notebook-3">
            <C.ImageProduct src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook-2.jpg" />
            <C.NameProduct className="font-2-xl">Notebook</C.NameProduct>
            <C.PriceProduct className="font-2-m">R$ 299,00</C.PriceProduct>
            <C.DescriptionProduct className="font-2-s">
              Notebook usado - 4gb de RAM - processador 4.123
            </C.DescriptionProduct>
          </Link>
        </C.LiProduct>
        <C.LiProduct>
          <Link to="/product/notebook-3">
            <C.ImageProduct src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook-2.jpg" />
            <C.NameProduct className="font-2-xl">Notebook</C.NameProduct>
            <C.PriceProduct className="font-2-m">R$ 299,00</C.PriceProduct>
            <C.DescriptionProduct className="font-2-s">
              Notebook usado - 4gb de RAM - processador 4.123
            </C.DescriptionProduct>
          </Link>
        </C.LiProduct>
      </C.List>
    </C.Products>
  );
};

export default Products;
