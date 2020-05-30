import login from './login.vue';
import {shallowMount , createLocalVue} from "@vue/test-utils";
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);


describe('На странице есть кнопка Авторизоваться', () => {
    it ('Ищем кнопку авторизации по классу', ()=> {
        
        const wrapper = shallowMount(login);
        const button = wrapper.find(".auth__submit");

        expect(button.element).toMatchSnapshot();

    });

    it ('Ищем кнопку авторизации по слову Авторизоваться', ()=> {
        
        const wrapper = shallowMount(login);
        const button = wrapper.find("button[type='submit']");

        expect(button.text()).toBe("Авторизоваться");

    });
});

describe('при клике на кнопку авторизации появляется формa', () => {
    it ('open form', async () => {
        const wrapper = shallowMount(login);
        const openBtn = wrapper.find('.login__btn-wrap');
        const form = wrapper.find('.login__form');

        openBtn.trigger('click');
        await wrapper.vm.$nextTick();
        expect(form.element).toMatchSnapshot();

    })
})


describe('форма имеет все необходимые поля', ()=> {
    it('есть поле логин', () => {
        const wrapper = shallowMount(login);
        const inputLogin = wrapper.find('.auth__input--login');

        expect(inputLogin.element).toMatchSnapshot();
    });

    it('есть поле пароль', () => {
        const wrapper = shallowMount(login);
        const inputPassword = wrapper.find('.auth__input--password');

        expect(inputPassword.element).toMatchSnapshot();
    });
});

describe('кнопка “Отправить” заблокирована до тех пор, пока не введены все необходимые данные', ()=> {
    let actions;
    let store;

    beforeEach(() => {
        actions = {
            loginUser: jest.fn()
         
        }
        store = new Vuex.Store({
          actions
        })
      })

      it ('форма не сабмитится при незаполненных полях', () => {
        const wrapper = shallowMount(login , {store, localVue});
        const form = wrapper.find('.login__form');
        const inputLogin = wrapper.find('.auth__input--login');
        const inputPassword = wrapper.find('.auth__input--password');

        inputLogin.setValue('');
        inputPassword.setValue('');
        form.trigger('submit');

        expect(actions.loginUser).not.toHaveBeenCalled();
      })
})



