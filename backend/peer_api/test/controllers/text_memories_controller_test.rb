require 'test_helper'

class TextMemoriesControllerTest < ActionController::TestCase
  setup do
    @text_memory = text_memories(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:text_memories)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create text_memory" do
    assert_difference('TextMemory.count') do
      post :create, text_memory: { text: @text_memory.text, user_id: @text_memory.user_id }
    end

    assert_redirected_to text_memory_path(assigns(:text_memory))
  end

  test "should show text_memory" do
    get :show, id: @text_memory
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @text_memory
    assert_response :success
  end

  test "should update text_memory" do
    patch :update, id: @text_memory, text_memory: { text: @text_memory.text, user_id: @text_memory.user_id }
    assert_redirected_to text_memory_path(assigns(:text_memory))
  end

  test "should destroy text_memory" do
    assert_difference('TextMemory.count', -1) do
      delete :destroy, id: @text_memory
    end

    assert_redirected_to text_memories_path
  end
end
