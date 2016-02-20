class TextMemoriesController < ApplicationController
  before_action :set_text_memory, only: [:show, :edit, :update, :destroy]

  # GET /text_memories
  # GET /text_memories.json
  def index
    @text_memories = TextMemory.all
  end

  # GET /text_memories/1
  # GET /text_memories/1.json
  def show
  end

  # GET /text_memories/new
  def new
    @text_memory = TextMemory.new
  end

  # GET /text_memories/1/edit
  def edit
  end

  # POST /text_memories
  # POST /text_memories.json
  def create
    @text_memory = TextMemory.new(text_memory_params)

    respond_to do |format|
      if @text_memory.save
        format.html { redirect_to @text_memory, notice: 'Text memory was successfully created.' }
        format.json { render :show, status: :created, location: @text_memory }
      else
        format.html { render :new }
        format.json { render json: @text_memory.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /text_memories/1
  # PATCH/PUT /text_memories/1.json
  def update
    respond_to do |format|
      if @text_memory.update(text_memory_params)
        format.html { redirect_to @text_memory, notice: 'Text memory was successfully updated.' }
        format.json { render :show, status: :ok, location: @text_memory }
      else
        format.html { render :edit }
        format.json { render json: @text_memory.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /text_memories/1
  # DELETE /text_memories/1.json
  def destroy
    @text_memory.destroy
    respond_to do |format|
      format.html { redirect_to text_memories_url, notice: 'Text memory was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_text_memory
      @text_memory = TextMemory.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def text_memory_params
      params.require(:text_memory).permit(:text, :user_id)
    end
end
