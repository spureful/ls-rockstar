import login from "./login.vue";
import {
	shallowMount,
	createLocalVue
} from "@vue/test-utils";
import Vuex from 'vuex';

const localVue = createLocalVue();

localVue.use(Vuex);


describe('Ищем кнопку авторизации', () => {
	it('Ищем кнопку авторизации', () => {
		const wrapper = shallowMount(login);
		const button = wrapper.find(".auth__submit");
		expect(button.element).toMatchSnapshot();

	})

});

describe('Ищем кнопку авторизации с текстом "Авторизоваться', () => {
	it('renders a button auth', () => {
		const wrapper = shallowMount(login);

		const button = wrapper.find("button");
		expect(button.text()).toBe('Авторизоваться');
	})
});


describe('при клике на кнопку авторизации появляется форма', () => {
	it('click to open form', async () => {
		const wrapper = shallowMount(login);
		const button = wrapper.find(".login__btn-wrap");
		const loginForm = wrapper.find(".login__form");

		button.trigger("click");

		await wrapper.vm.$nextTick();

		expect(loginForm.element).toMatchSnapshot();

	})

});

describe('форма имеет все необходимые поля', () => {
	it('form has field login', () => {
		const wrapper = shallowMount(login);
		const inputLogin = wrapper.find(".auth__input--login");
		expect(inputLogin.element).toMatchSnapshot();
	})

	it('form has field password', () => {
		const wrapper = shallowMount(login);

		const inputPassword = wrapper.find(".auth__input--password");
		expect(inputPassword.element).toMatchSnapshot();
	})
});

describe('кнопка “Отправить” заблокирована до тех пор, пока не введены все необходимые данные', () => {

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
	it('форма не сабмитится при пустом инпуте', async () => {
		const wrapper = shallowMount(login, {
			store,
			localVue
		});

		const inputLogin = wrapper.find(".auth__input--login");
		const inputPassword = wrapper.find(".auth__input--password");
		const form = wrapper.find(".login__form");

		inputLogin.setValue('');
		inputPassword.setValue('w3');
		form.trigger('submit');

		expect(actions.loginUser).not.toHaveBeenCalled();

	});	

});
