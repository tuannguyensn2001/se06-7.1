<?php

namespace App\Http\Controllers;

use App\Events\CommentCreateEvent;
use App\Models\Comment;
use App\Models\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class CommentController extends Controller
{
    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'content' => 'required',
            'id' => 'required',
            'type' => Rule::in(['model'])
        ]);

        if ($validator->fails()) {
            return $this->responseBadRequest($validator->errors());
        }

        $data = $request->only('content', 'id');

        $comment = Comment::create([
            'content' => $data['content'],
            'user_id' => Auth::id(),
            'commentable_id' => $data['id'],
            'commentable_type' => Model::class
        ]);

        event(new CommentCreateEvent(1, $comment));

        return $this->response([
            'message' => 'Thêm mới comment thành công',
            'data' => $comment
        ]);
    }

    public function show($id)
    {
        return $this->response([
            'message' => 'Lấy comment thành công',
            'data' => Comment::with('user')->where('commentable_id', $id)->orderBy('created_at', 'desc')->get()
        ]);
    }
}
