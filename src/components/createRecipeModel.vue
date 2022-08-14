<template>
  <div class="inline">
    <b-button pill v-b-modal="'my-modal'" variant="outline-primary">+ New Recipe</b-button>
    <b-modal id="my-modal" @ok="handleOk" @show="handleReset" @hidden="handleReset">
      <b-form @submit.prevent="handleOk" @reset.prevent="handleReset">
        <b-form-group
          label-cols-sm="3"
          label="Title:"
        >
          <b-form-input
            id="formTitle"
            v-model="form.formTitle"
            type="text"
            :state="validateState('formTitle')"
          >
          </b-form-input>
          <b-form-invalid-feedback v-if="$v.form.formTitle.required">
            insert title
          </b-form-invalid-feedback>
        </b-form-group>
        
        <b-form-group
          label-cols-sm="3"
          label="Ready in minutes:"
        >
          <b-form-input
            id="time"
            v-model="form.time"
            type="text"
            :state="validateState('time')"
          >
          </b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.time.required">
            insert time
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-if="!$v.form.time.numeric">
            time nust be an integer
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          label-cols-sm="3"
          label="Ingredients:"
        >
          <b-form-input
            id="ingredients"
            :state="validateState('ingredients')"
            v-model="form.ingredients"
            type="text"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.ingredients.required">
            insert ingredients
          </b-form-invalid-feedback>
        </b-form-group>
        <br>
        <b-row>
            <b-col>
                <b-form-checkbox
                    id="vegan"
                    v-model="vegan"
                    name="vegan"
                    value="true"
                    unchecked-value="false"
                >
                    Vegan
                </b-form-checkbox>
            </b-col>
          <b-col>
            <b-form-checkbox
            id="gFree"
            v-model="gFree"
            name="gFree"
            value="true"
            unchecked-value="false"
            >
                Gluten Free
            </b-form-checkbox>
          </b-col>
          <b-col>
            <b-form-checkbox
            id="vegetarian"
            v-model="vegetarian"
            name="vegetarian"
            value="true"
            unchecked-value="false"
            >
                Vegetarian
            </b-form-checkbox>
          </b-col>
        </b-row>
        <br>
        <b-form-group
          label-cols-sm="3"
          label="Instructions:"
        >
          <b-form-input
            id="instructions"
            :state="validateState('instructions')"
            v-model="form.instructions"
            type="text"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.instructions.required">
            insert instructions
          </b-form-invalid-feedback>
        </b-form-group>
        
        <b-form-group
          id="input-group-serving"
          label-cols-sm="3"
          label="Serving:"
        >
            <b-form-select
                v-model="serving"
                :options="variants"
                ></b-form-select>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Image:"
        >
          <b-form-input
            id="image"
            v-model="form.image"
            placeholder="url example- https://img.png"
            type="text"
          >
          </b-form-input>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { required, numeric } from "vuelidate/lib/validators";
import { VBModal, BModal, BFormCheckbox, BButton } from "bootstrap-vue";

export default {
  name: "createRecipeModel",
  data() {
    return {
      variants: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
      form: {
        title: "",
        image: "",
        time: "",
        ingredients: "",
        instructions: "",
        serving: "",
      },
      vegan: "false",
      vegetarian: "false",
      gFree: "false",
    };
  },
  validations: {
    form: {
      formTitle: {
        required,
      },
      time: {
        required,
        numeric,
      },
      ingredients: {
        required,
      },
      instructions: {
        required,
      },
      serving: {
        required,
        numeric,
      },
    },
  },
  components: {
    BButton,
    BModal,
    BFormCheckbox,
  },
  directives: {
    "b-modal": VBModal,
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async CreateNewRecipe() {
      try {
        const response = await this.axios.post(
          "http://wikirecipe.cs.bgu.ac.il/users/addUserRecipe",
          {
            title: this.form.title,
            image: this.form.image,
            readyInMinutes: this.form.time,
            extendedIngredients: this.form.ingredients,
            instructions: this.form.instructions,
            servings: this.form.serving,
            vegan: this.vegan,
            vegetarian: this.vegetarian,
            glutenFree: this.gFree,
          },
          { withCredentials: true }
        );
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    handleOk(bvModalEvent) {
    //   this.$v.form.$touch();
    //   bvModalEvent.preventDefault()
    //   if (this.$v.form.$anyError) {
        
    //     return;
    //   }
      this.CreateNewRecipe();
    },
    handleReset() {
      this.form = {
        title: "",
        image: "",
        time: "",
        ingredients: "",
        instructions: "",
        serving: "",
      };
      console.log(this.form)
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
  },
};
</script>